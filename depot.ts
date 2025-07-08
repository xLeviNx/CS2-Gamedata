/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { assert, fail } from "@ianlucas/cs2-lib";
import { depotDownloader } from "@ianlucas/depot-downloader";
import { readFile, rename, writeFile } from "fs/promises";
import { basename, join } from "path";
import { configdir, cwd, tryReadFile, workdir } from "./filesystem";
import { readProcess } from "./misc";

const CS2_APP = 730;

export class Depot {
  public filelistPath: string;
  public manifestPath: string;

  constructor(public depotId: number) {
    this.filelistPath = join(configdir, `${this.depotId}.depot`);
    this.manifestPath = join(workdir, `${this.depotId}.manifest`);
  }

  async fetchFiles(manifest: string) {
    try {
      const output = await readProcess(
        depotDownloader({
          app: CS2_APP,
          depot: this.depotId,
          filelist: this.filelistPath,
          manifest: manifest,
        }),
      );
      return Array.from(output.matchAll(/% (.*)/g))
        .map((matches) => matches[1])
        .filter((value) => value !== undefined);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async downloadFilesForManifest(manifest: string) {
    console.log(`Checking depot ${this.depotId}...`);
    const existingManifestId = (await tryReadFile(this.manifestPath)) ?? "";
    const latestManifestId = manifest;
    assert(latestManifestId !== undefined, `Failed to get latest manifest for depot ${this.depotId}!`);
    if (existingManifestId === latestManifestId) {
      console.log(`Depot ${this.depotId} is up to date.`);
      return { manifestId: latestManifestId, hasUpdate: false };
    }

    const filelist = (await readFile(this.filelistPath, "utf-8")).split("\n");
    const paths = await this.fetchFiles(manifest);
    if (paths?.length !== filelist.length) {
      console.log(filelist, paths);
      fail(`Failed to download depot ${this.depotId}!`);
    }
    for (const path of paths) {
      const filename = basename(path);
      await rename(join(cwd, path), join(workdir, filename));
      await writeFile(this.manifestPath, latestManifestId, "utf-8");
      console.log(`Downloaded ${filename}.`);
    }

    return { manifestId: latestManifestId, hasUpdate: true };
  }
}
