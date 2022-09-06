const { describe, expect } = require("@jest/globals");

const { callDelay } = require("../Entrega1.4");

describe("callDelay", () => {
  it("Check promise function", async () => {
    const data = await callDelay()
    expect(data).toBe('Resolved');
  });
});