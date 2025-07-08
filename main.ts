import { readdir, mkdir, readFile } from "node:fs/promises";
import binaries from "./config/binaries.json" assert { type: "json" };
import { Depot } from "./depot";
import { exists, workdir } from "./filesystem";
import { Sigscan } from "./sigscan.js";
import { Signature, Subroutine } from "./subroutine.js";
import { Binary } from "./binary.js";
import { parseGamedata } from "./counterstrikesharp.js";
import { join } from "node:path";
import { SteamCmdResponse } from "./steamcmd.js";
import { sign } from "node:crypto";

if (!(await exists(workdir))) {
  await mkdir(workdir);
}

const configdir = new URL("./config", import.meta.url);
const datadir = new URL("./data", import.meta.url);

const steamData: SteamCmdResponse = await fetch("https://api.steamcmd.net/v1/info/730").then((resp) => resp.json());
const latestBuildId = steamData.data[730].depots.branches.public.buildid;
const latestGameData = (await readdir(datadir)).sort().reverse()[0];

for await (const filename of await readdir(configdir)) {
  if (filename.endsWith(".depot")) {
    const depotName = filename.split(".")[0];
    const depot = new Depot(parseInt(filename.split(".")[0]));

    var manifestId = steamData.data[730].depots[depotName].manifests.public.gid;

    await depot.downloadFilesForManifest(manifestId);
  }
}

const data = await readFile(new URL(`./data/${latestGameData}`, import.meta.url), "utf-8");
const subroutines = parseGamedata(data);

const allBrokenSignatures: Array<{
  name: string;
  library: string;
  os: string;
  signature: string;
}> = [];

await Promise.all(
  binaries.map(async ({ filename, library, os }) => {
    const filteredSubRoutines = subroutines!.filter((s) => s.library === library);
    const signatures = await Sigscan.findSignatures(new Binary(filename, library, os), filteredSubRoutines);
    const found = signatures.filter((isFound) => isFound).length;

    console.log(`\n=== ${filename} (${library}) ===`);
    console.log(`Found ${found} of ${signatures.length} signatures`);

    const brokenSignatures = filteredSubRoutines.filter((subroutine) => {
      const signature = subroutine.signatures[os];
      return signature?.isSupported && !signature.isFound;
    });

    if (brokenSignatures.length > 0) {
      console.log(`\n❌ Broken signatures (${brokenSignatures.length}):`);
      brokenSignatures.forEach((subroutine) => {
        const signature = subroutine.signatures[os];
        console.log(`  - ${subroutine.name}: ${signature?.idaStyle}`);
        allBrokenSignatures.push({ name: subroutine.name, library, os, signature: signature?.idaStyle! });
      });
    } else {
      console.log(`✅ All signatures working!`);
    }
  }),
);

if (allBrokenSignatures.length > 0) {
  allBrokenSignatures.forEach(({ name, library, os, signature }) => {
    console.log(`::error::${name} (${os}/${library}): ${signature}`);
  });
  process.exit(1);
} else {
  console.log(`\n🎉 All signatures are working correctly!`);
}
