const { describe, expect, beforeAll } = require("@jest/globals");

const { sayHello } = require("../entrega1.3");
const { talk } = require("../entrega1.3");

const logSpy = jest.spyOn(console, "log");

describe("Entrega 1.3 - sayHello funcion", () => {
  it("Test sayHello function", () => {
    sayHello("Marçal");
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Marçal");
  });

  it("Test sayHello function input param", () => {
    expect(() => sayHello()).toThrowError(
      'This function expects to receive a "name" string as parameter'
    );
  });
});

describe("Entrega 1.3 - talk function", () => {
  it("Test talk function", () => {
    talk("Rosa", sayHello);
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Rosa");
  });

  it("Test talk function input param", () => {
    expect(() => talk()).toThrowError(
      'This function expects to receive a "name" string and a "callback" function as parameters'
    );
  });
});
