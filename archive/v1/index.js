import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";
import fixAnyJs from "express-fix-any-js";

export default ({ raka, poka, toPath, inFileType, alterArray }) => {
    let fromRakaPoka;

    const source = getSourcePath({ inFileType });
    const destination = getDestinationPath(toPath, raka);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        fromRakaPoka = fixAnyJs({
            inTargetPath: toPath, alterArray,
            inFileType, inValue: raka, OutValue: poka
        });
    };

    return { fromRakaPoka };
};