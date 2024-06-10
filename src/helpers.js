const { readFileSync, writeFileSync } = require("node:fs");

const readJsonFile = (path, fileName) => {
    const collection = readFileSync(`${path}/${fileName}`, "utf8");
    return collection ? JSON.parse(collection) : [];
};

const writeJsonFile = (path, fileName, data) => {
    data = JSON.stringify(data, 0, 2);
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8"});
};

module.exports = { readJsonFile, writeJsonFile};

