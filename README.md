# CS2-Gamedata

A modified version of [@ianlucas](https://github.com/ianlucas) CS2 Server Signatures Tracker that verifies the gamedata in the data folder is valid based on the latest CS2 update.

Any JSON data in the `data` folder will be synced on push to Cloudflare R2 and served via CDN @ http://gamedata.cssharp.dev

## Contributing

If a new version of CS2 is released:

- Ideally create a new JSON file in the `data` folder with the name of the patch version. You can find the patch version on the CS2 [SteamDB](https://steamdb.info/patchnotes/) page. Alternatively, the failing signature check will tell you what build ID is failing. This is mainly for historical purposes and ease of diffing.
- Update the `data/latest.json` file with the latest signatures (the contents of your new JSON file).
- Raise a PR to this repository with the changes. An automatic Github action will run to verify the signatures are valid against the latest CS2 binaries.
- If the signatures are valid, the PR will pass and you can merge it.
- Once merged, the new data will be available at http://gamedata.cssharp.dev/latest.json and the patch reference version will be available at http://gamedata.cssharp.dev/{patch_version}.json.
