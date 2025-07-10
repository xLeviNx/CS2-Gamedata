import { readdir, mkdir, readFile } from "node:fs/promises";
import binaries from "./config/binaries.json" assert { type: "json" };
import { Depot } from "./depot";
import { exists, workdir } from "./filesystem";
import { Sigscan } from "./sigscan.js";
import { Binary } from "./binary.js";
import { parseGamedata } from "./counterstrikesharp.js";
import { SteamCmdResponse } from "./steamcmd.js";
import { basename, extname, join } from "node:path";
import colors from "picocolors";

if (!(await exists(workdir))) {
  await mkdir(workdir);
}

const configdir = new URL("./config", import.meta.url);

const steamResponse: SteamCmdResponse = await fetch("https://api.steamcmd.net/v1/info/730").then((resp) => resp.json());
const latestBuildId = steamResponse.data[730].depots.branches.public.buildid;

for await (const filename of await readdir(configdir)) {
  if (filename.endsWith(".depot")) {
    const depotName = basename(filename, extname(filename));
    const depot = new Depot(parseInt(filename.split(".")[0]));

    var manifestId = steamResponse.data[730].depots[depotName].manifests.public.gid;
    await depot.downloadFilesForManifest(manifestId);
  }
}

const steamInfo = (await readFile(join(workdir, "steam.inf"), "utf-8")).split("\n").reduce(
  (acc, line) => {
    const [key, value] = line.trim().split("=");
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  },
  {} as Record<string, string>,
);

console.log(colors.gray(`Server Version: ${colors.yellowBright(steamInfo.ServerVersion)}`));
console.log(colors.gray(`Patch (Build ID): ${colors.yellowBright(latestBuildId)}`));

const data = await readFile(new URL(`./data/latest.json`, import.meta.url), "utf-8");
const patchData = await readFile(new URL(`./data/${latestBuildId}.json`, import.meta.url), "utf-8").catch(() => null);

const verifyGamedata = async (identifier: string, data: string): Promise<boolean> => {
  const subroutines = parseGamedata(data);

  console.log(colors.cyanBright(`Verifying gamedata signatures in ${identifier}...`));

  let success = true;
  await Promise.all(
    binaries.map(async ({ filename, library, os }) => {
      const filteredSubRoutines = subroutines!.filter((s) => s.library === library);
      const signatures = await Sigscan.findSignatures(new Binary(filename, library, os), filteredSubRoutines);
      const found = signatures.filter((isFound) => isFound).length;

      const brokenSignatures = filteredSubRoutines.filter((subroutine) => {
        const signature = subroutine.signatures[os];
        return signature?.isSupported && !signature.isFound;
      });

      if (brokenSignatures.length > 0) {
        console.log(colors.red(`\n❌ Broken signatures (${brokenSignatures.length}):`));
        brokenSignatures.forEach((subroutine) => {
          const signature = subroutine.signatures[os];
          console.log(`::error::${subroutine.name} (${os}/${library}): ${signature?.idaStyle}`);
          success = false;
        });
      } else {
        console.log(colors.green(`✅ ${filename} ✅`));
      }
    }),
  );

  return success;
};

const success =
  (await verifyGamedata("latest", data)) && (patchData === null || (await verifyGamedata(latestBuildId, patchData)));

if (!success) {
  process.exit(1);
} else {
  console.log(`\n🎉 All signatures are working correctly!`);
}
