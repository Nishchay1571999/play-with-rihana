const fs = require("fs");
const path = require("path");
const config = require("../rihana.config.js");
const dsa = require("./dsa.js");
const src_path = path.join(__dirname, "..", "src");

let level = "beginner";
let cmd = "beginner";
try {
    level = fs.readdirSync(src_path).filter((i) => i.includes(level))[0];
    if (!level) {
        throw new Error("Couldn't find the path for " + cmd);
    } else {
        // console.log("Found the folder : ",level)
    }
} catch (error) {
    level = "beginner";
    if (!fs.existsSync(path.join(src_path, level))) {
        fs.mkdirSync(path.join(src_path, level));
    }
}

const level_name = `${level}`;
const level_path = path.join(src_path, level_name);
try {
    fs.unlinkSync(level_path);
} catch (e) {}
try {
    fs.mkdirSync(level_path);
} catch (e) {}

function generate_method(method) {
    return `${method.name}(${method.args || ""}): ${method.return || "void"} {

}`;
}

function generate_property(prop) {
    return `${prop.scope} ${prop.name}: ${prop.type};`;
}

function generate_getter(getter) {
    return `get ${getter.name}(): ${getter.return} {
    return this.${getter.prop_name};
}`;
}

function create_class(name, item) {
    fs.writeFileSync(
        path.join(level_path, `${name}.ts`),
        `export default class ${name}${item.generic || ""} {
    ${(item.properties || []).map(generate_property).join("\n    ")}

    ${(item.getters || []).map(generate_getter).join("\n    ")}

    constructor() {
    }

    ${(item.methods || []).map(generate_method).join("\n    ")}
}`,
    );
}

function generate_return_statement(value) {
    switch (value) {
        case "boolean":
            return "return false";
        case "number[]":
            return "return arr"
    }
}

function create_function(name, item) {
    const g = item.generic ? item.generic : "";
    fs.writeFileSync(
        path.join(level_path, `${name}.ts`),
        `export default function ${item.fn}${g}(${item.args}): ${item.return} {
        ${generate_return_statement(item.return)}
}`,
    );
}
console.log(config);

config.dsa.forEach((ds) => {
    const item = dsa[ds];
    if (!item) {
        throw new Error(`algorithm ${ds} could not be found`);
    }
    if (item.type === "class") {
        create_class(ds, item);
    } else {
        create_function(ds, item);
    }
});
