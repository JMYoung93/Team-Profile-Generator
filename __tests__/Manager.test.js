const Manager = require("../lib/Manager")

test("Can initiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object');
});