import parseFlags from "./parseFlags.js";
import parseAlterArray from "./parseAlterArray.js";
import parsePositionals from "./parsePositionals.js";

const parseArgs = () => {
    const args = process.argv.slice(2);

    return {
        ...parsePositionals(args),
        ...parseFlags(args),
        alterArray: parseAlterArray(args)
    };
};

export default parseArgs;