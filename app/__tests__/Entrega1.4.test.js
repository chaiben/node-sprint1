const { describe, expect } = require("@jest/globals");

// jest.useFakeTimers();

const { callDelay, doubleNumberDelay } = require("../Entrega1.4");

describe("callDelay", () => {
  // There are two different methods to test an asyncronous function

  it("Method 1: Check promise function", async () => {
    const data = await callDelay()
    expect(data).toBe('Resolved');
  });

  it("Method 2: Check promise function", () => {
    callDelay().then(result =>{
      expect(result).toBe('Resolved');
    })
  });
});

describe("doubleNumberDelay", () => {

  it("Testing using Jest Fake Timers", async () => {
    console.log(1)
    jest.useFakeTimers();
    const data = await doubleNumberDelay(4);
    jest.runAllTimers();
    console.log(2)
    expect(data).toBe(8);
  });

});