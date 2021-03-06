const assert = require("chai").assert;
const app = require("../app");

describe("App", () => {
    it("sayHello should return hello", () => {
        let result = app.sayHello();
        assert.equal(result, "hello");
    });
    it ("sayHello should return type string", () => {
        let result = app.sayHello();
        assert.typeOf(result, "string");
    });
    it ("addNumbers should be above 5", () => {
        let result = app.addNumbers(5, 5);
        assert.isAbove(result, 5);
    });
    it ("addNumbers should return type number", () => {
        let result = app.addNumbers(5, 5);
        assert.typeOf(result, "number");
    });
});