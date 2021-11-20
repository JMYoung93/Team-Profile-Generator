const Intern = require("../lib/Intern")

test("Can initiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe('object');
});