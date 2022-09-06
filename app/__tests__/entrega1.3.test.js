const { describe, expect } = require("@jest/globals");

const { sayHello, getEmployee, getSalary, talk } = require("../Entrega1.3");

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

describe("getSalary", () => {
  it("Metodo 1: Get Salary by id 1", () => {
    return getSalary(1).then((salary) =>
      expect(salary).toEqual(  {
        id: 1,
        salary: 4000,
      })
    );
  });
  it("Metodo 2: getSalary by id 2", () => {
    return expect(getSalary(2)).resolves.toEqual({
      id: 2,
      salary: 1000,
    });
  });

  it("Invalid getSalary call", () => {
    return expect(getSalary()).rejects.toThrow("N2E2 response: ID not found");
  });
});
