const { describe, expect } = require("@jest/globals");

const { callDelay } = require("../Entrega1.4");

describe("callDelay", () => {
  // There are two different methods to test an asyncronous function

  it("Method 1: Check promise function", async () => {
    const data = await callDelay()
    expect(data).toBe('Resolved');
  });

  it("Method 2: Check promise function", async () => {
    callDelay().then(result =>{
      expect(result).toBe('Resolved');
    })
  });

  // 
});