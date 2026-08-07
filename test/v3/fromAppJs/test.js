import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";

const fromNpm = runSync({
    raka: "api1", poka: "api2",
    inFileType: "fromAppJs",
    toPath: __dirname
});

console.log("aaaaaa : ", fromNpm);
