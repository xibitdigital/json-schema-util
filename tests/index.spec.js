"use strict";

const { expect } = require("chai");
const { random } = require("faker");
const { validate } = require("../index");

describe("JsonSchema Validator", function() {
  const schema = {
    type: "object",
    properties: {
      testNum: {
        type: "number"
      },
      testString: {
        type: "string"
      }
    }
  };

  it.only("should validate against a jsonschema", function() {
    const data = { testNum: random.number() };
    const res = validate(data, schema);

    expect(res.isValid).to.equal(true);
  });

  it.only("should validate against a jsonschema and return errors", function() {
    const data = { testNum: random.word(), testString: random.number() };
    const res = validate(data, schema);

    expect(res.isValid).to.equal(false);
    expect(res.errors.length).to.equal(2);
  });
});
