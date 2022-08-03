const { describe, expect, beforeAll } = require("@jest/globals");

const { sayHello, getEmployee } = require("../entrega1.3");
const { talk } = require("../entrega1.3");

const logSpy = jest.spyOn(console, "log");

describe("sayHello", () => {
  it("Say hello to Marçal", () => {
    sayHello("Marçal");
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Marçal");
  });

  it("Say hello fails", () => {
    expect(() => sayHello()).toThrowError(
      'This function expects to receive a "name" string as parameter'
    );
  });
});

describe("talk", () => {
  it("Talk to Rosa", () => {
    talk("Rosa", sayHello);
    expect(logSpy).toHaveBeenCalledWith("N1E2 response: Hello Rosa");
  });

  it("Talk fails", () => {
    expect(() => talk()).toThrowError(
      'This function expects to receive a "name" string and a "callback" function as parameters'
    );
  });
});

describe("getEmployee", () => {
  it("Metodo 1: Get Employee by id 1", () => {
    return getEmployee(1).then((employee) =>
      expect(employee).toEqual({ id: 1, name: "Linux Torvalds" })
    );
  });
  it("Metodo 2: getEmployee by id 2", () => {
    return expect(getEmployee(2)).resolves.toEqual({
      id: 2,
      name: "Bill Gates",
    });
  });

  it("Invalid getEmployee call", () => {
    return expect(getEmployee()).rejects.toThrow("N2E1 response: ID not found");
  });
});
