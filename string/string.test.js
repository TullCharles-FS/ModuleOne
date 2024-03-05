const {
  uppercase,
  lowercase,
  add,
  subtract,
  multiply,
  divide,
  //root,
} = require("./string");

describe("Testing the string module", () => {
  test("should uppercase a string input", () => {
    expect(uppercase("bob")).toBe("BOB");
  });
  test("should lowercase a string input", () => {
    expect(lowercase("FULL Sail")).toBe("full sail");
  });
  test("should add numbers", () => {
    expect(add(3, 6)).toBe(9);
  });
  test("should subtract numbers", () => {
    expect(subtract(4, 3)).toBe(1);
  });
  test("should multiply numbers", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  test("should divide numbers", () => {
    expect(divide(2, 2)).toBe(1);
  });
  //test("should return square root", () => {
  // expect(root(5 * 5)).toBe(5);
  // });
});
