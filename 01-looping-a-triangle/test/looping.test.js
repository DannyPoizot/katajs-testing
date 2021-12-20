const chai = require("chai");

const assert = chai.assert;

const looping = require("../looping");

describe("#loopingTriangle", function(){

    // Array
    it("should return an array", () => {
        assert.isArray(looping(7), "Arrays is not defined." );
    });

    // String
    it("should be a string", () => {
        assert.isString(looping(7)[3], "That's not a string.");
    
    });

    // Length of 7
    it("should have seven lines", () => {
        assert.lengthOf(looping(7), 7, "Array has length of 7");
    });
});

