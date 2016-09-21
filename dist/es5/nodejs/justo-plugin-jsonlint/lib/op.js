"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =






op;var _jsonlint = require("jsonlint");var _jsonlint2 = _interopRequireDefault(_jsonlint);var _justoFs = require("justo-fs");var fs = _interopRequireWildcard(_justoFs);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var opts;


  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = { src: [] };
  if (typeof opts.src == "string") opts.src = [opts.src];
  if (!opts.src || opts.src.length === 0) throw new Error("src expected.");var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {


    for (var _iterator = opts.src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var entry = _step.value;
      entry = fs.entry(entry);
      if (entry instanceof fs.Dir) parseDir(entry, opts);else
      if (entry instanceof fs.File) parseFile(entry, opts);else
      throw new Error(fs.path + " doesn't exist.");
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}


  return 0;
}

function parseFile(file) {
  _jsonlint2.default.parse(file.text);
}

function parseDir(dir, opts) {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
    for (var _iterator2 = dir.entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var entry = _step2.value;
      if (entry instanceof fs.Dir) parseDir(entry, opts);else
      if (entry instanceof fs.File) parseFile(entry, opts);
    }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
}