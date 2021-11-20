const Engineer = require("../lib/Engineer")

test("Can initiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});