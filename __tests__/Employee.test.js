const Employee = require("../lib/Employee");

test("Can initiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});