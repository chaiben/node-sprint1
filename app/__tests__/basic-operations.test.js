const { describe, expect } = require("@jest/globals");
const { sum, subtract, multiply, divide } = require("../basic-operations");

describe("Test sum operator", () => {
  it("Check the sum function", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 0)).toBe(10);
    expect(sum(10, 10)).toBe(20);
    expect(sum(10, 10)).not.toBe(1);
    expect(() => sum(10)).toThrowError("This function expect 2 numbers");
    expect(() => sum()).toThrowError("This function expect 2 numbers");
    expect(() => sum("a", "b")).toThrowError("This function expect 2 numbers");
  });
});

describe("Test subtract operator", () => {
  it("Check the subtract function", () => {
    expect(subtract(1, 2)).toBe(-1);
    expect(subtract(10, 0)).toBe(10);
    expect(subtract(10, 10)).toBe(0);
    expect(subtract(10, 10)).not.toBe(1);
    expect(() => subtract(10)).toThrowError("This function expect 2 numbers");
    expect(() => subtract()).toThrowError("This function expect 2 numbers");
    expect(() => subtract("a", "b")).toThrowError(
      "This function expect 2 numbers"
    );
  });
});

describe("Test multiply operator", () => {
  it("Check the multiply function", () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(10, 10)).toBe(100);
    expect(multiply(10, 10)).not.toBe(1);
    expect(() => multiply(10)).toThrowError("This function expect 2 numbers");
    expect(() => multiply()).toThrowError("This function expect 2 numbers");
    expect(() => multiply("a", "b")).toThrowError(
      "This function expect 2 numbers"
    );
  });
});

describe("Test divide operator", () => {
  it("Check the divide function", () => {
    expect(divide(1, 2)).toBe(0.5);
    expect(divide(10, 0)).toBe(Infinity);
    expect(divide(10, 10)).toBe(1);
    expect(divide(10, 10)).not.toBe(10);
    expect(() => divide(10)).toThrowError("This function expect 2 numbers");
    expect(() => divide()).toThrowError("This function expect 2 numbers");
    expect(() => divide("a", "b")).toThrowError(
      "This function expect 2 numbers"
    );
  });
});
