
import discover from "discover-from-knowledge";
import fixAnyJs from "express-fix-any-js";

import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";

export default ({ raka, poka, toPath, alterArray }) => {
    let fromRakaPoka;
    const fileType = discover(toPath);

    const source = getSourcePath({ inFileType: fileType });
    const destination = getDestinationPath(toPath, raka);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        fromRakaPoka = fixAnyJs({
            inTargetPath: toPath, alterArray,
            inFileType: fileType,
            inValue: raka, OutValue: poka
        });
    };

    return { fromRakaPoka };
};