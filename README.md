# CS2-Gamedata

A modified version of [@ianlucas](https://github.com/ianlucas) CS2 Server Signatures Tracker that verifies the gamedata in the data folder is valid based on the latest CS2 update.

Any JSON data in the `data` folder will be synced on push to Cloudflare R2 and served via CDN @ http://gamedata.cssharp.dev
