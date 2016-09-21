//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-jsonlint/lib/op").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  suite("Error handling", function() {
    test("No src specified", function() {
      op.must.raise("src expected.", [{}]);
    });
  });

  suite("src as string", function() {
    test("ok", function() {
      op([{
        src: path.join(DATA, "valid.json")
      }]).must.be.eq(0);
    });

    test("parse error", function() {
      op.must.raise(Error, [[{
        src: path.join(DATA, "invalid.json")
      }]]);
    });
  });

  suite("src as string[]", function() {
    test("ok", function() {
      op([{
        src: [path.join(DATA, "valid.json"), path.join(DATA, "valid2.json")]
      }]).must.be.eq(0);
    });

    test("parse error", function() {
      op.must.raise(Error, [{
        src: [path.join(DATA, "valid.json", path.join(DATA, "invalid.json"))]
      }]);
    });
  });

  suite("src entry is dir", function() {
    test("ok", function() {
      op([{
        src: path.join(DATA, "valid")
      }]).must.be.eq(0);
    });

    test("parse error", function() {
      op.must.raise(Error, [{
        src: path.join(DATA, "valid")
      }]);
    });
  });
})();
