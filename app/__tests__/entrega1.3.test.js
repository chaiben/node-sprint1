const { describe, expect } = require("@jest/globals");

const { sayHello } = require("../entrega1.3");
const { talk } = require("../entrega1.3");

describe("Entrega 1.3", () => {
  const logSpy = jest.spyOn(console, "log");

  it("Test sayHello function", () => {
    sayHello("Marçal");
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Marçal");
  });
  it("Test sayHello function without param", () => {
    expect(() => sayHello()).toThrowError(
      'This function expects to receive a "name" string as parameter'
    );
  });

  it("Test talk function", () => {
    talk("Rosa", sayHello);
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Rosa");
  });
});
