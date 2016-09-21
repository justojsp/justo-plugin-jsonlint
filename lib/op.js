//imports
import jsonlint from "jsonlint";
import * as fs from "justo-fs";

/**
 * Task operation.
 */
export default function op(params) {
  var opts;

  //(1) arguments
  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {src: []};
  if (typeof(opts.src) == "string") opts.src = [opts.src];
  if (!opts.src || opts.src.length === 0) throw new Error("src expected.");

  //(2) parse
  for (let entry of opts.src) {
    entry = fs.entry(entry);
    if (entry instanceof fs.Dir) parseDir(entry, opts);
    else if (entry instanceof fs.File) parseFile(entry, opts);
    else throw new Error(`${fs.path} doesn't exist.`);
  }

  //(3) return
  return 0;
}

function parseFile(file) {
  jsonlint.parse(file.text);
}

function parseDir(dir, opts) {
  for (let entry of dir.entries) {
    if (entry instanceof fs.Dir) parseDir(entry, opts);
    else if (entry instanceof fs.File) parseFile(entry, opts);
  }
}
