import discover from "discover-from-knowledge";
import fixAnyJs from "express-fix-any-js";
import {
    outputStructureJson as getOutputStructureJson
} from "pattern-collector-base-files";

import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";

export default ({ raka, poka, toPath, alterArray }) => {
    const discovery = discover(toPath);

    const outputStructureJson = { ...getOutputStructureJson() };

    if (!discovery.success) {
        outputStructureJson.KTF = false;
        outputStructureJson.KReason = "Unable to discover project type.";
        outputStructureJson.discovery = discovery;

        return outputStructureJson;
    }

    const fileType = discovery.discovery.fileType;

    const source = getSourcePath({
        inFileType: fileType
    });

    const destination = getDestinationPath(toPath, raka);

    const templateCopied = copyTemplate(source, destination);

    let modification;

    if (templateCopied) {
        modification = fixAnyJs({
            inTargetPath: toPath,
            alterArray,
            inFileType: fileType,
            inValue: raka,
            OutValue: poka
        });
    }

    outputStructureJson.KTF = true;
    outputStructureJson.discovery = discovery;
    outputStructureJson.template = {
        source,
        destination,
        copied: templateCopied
    };
    outputStructureJson.modification = modification;

    return outputStructureJson;

    // return {
    //     success: true,
    //     discovery,
    //     template: {
    //         source,
    //         destination,
    //         copied: templateCopied
    //     },
    //     modification
    // };
};