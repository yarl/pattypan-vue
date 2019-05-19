const fs = require("fs");
const util = require("util");

export function getFileList(directory: String) {
  const promise = util.promisify(fs.readdir);
  return promise(directory);
}
