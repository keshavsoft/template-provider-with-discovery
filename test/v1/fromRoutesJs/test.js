import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";
const folderName = "v1";

const fromNpm = runSync({
    raka: folderName, poka: folderName,
    inFileType: "fromRoutesJs",
    toPath: __dirname,
});

console.log("aaaaaa : ", fromNpm);
