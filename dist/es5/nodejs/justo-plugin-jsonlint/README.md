# justo-plugin-jsonlint

[![NPM version](http://img.shields.io/npm/v/justo-plugin-jsonlint.svg)](https://www.npmjs.org/package/justo-plugin-jsonlint)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-jsonlint.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-jsonlint)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-jsonlint.svg)](https://david-dm.org/justojsp/justo-plugin-jsonlint)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-jsonlint/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-jsonlint#info=devDependencies)

Plugin for **JSONLint**.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Use

```
const jsonlint = require("justo-plugin-jsonlint");
```

To `jsonlint`, the task must be called as follows:

```
jsonlint(title, opts)
jsonlint(justoOpts, opts)
```

`opts`:

- `src` (string or string[]). Source files to parse.

Example:

```
jsonlint("JSON grammar", {
  src: "data/"
});
```
