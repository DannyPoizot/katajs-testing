const chai = require("chai");

const assert = chai.assert;

const fizz = require("../fizzbuzz");

describe("#fizzbuzz", function(){

    // Return an array
    it("should return an array", () => {
        assert.isArray(fizz(), "That's not an array" );
    });
});