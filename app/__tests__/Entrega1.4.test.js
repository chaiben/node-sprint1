/* eslint-env jest */

const { describe, expect } = require('@jest/globals')

const { callDelay, doubleNumberDelay } = require('../Entrega1.4')

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('callDelay', () => {
  // There are two different methods to test an asyncronous function

  it('Method 1: Check promise function', async () => {
    const data = await callDelay()
    expect(data).toBe('Resolved')
  })

  it('Method 2: Check promise function', () => {
    callDelay().then(result => {
      expect(result).toBe('Resolved')
    })
  })
})

describe('doubleNumberDelay', () => {
  it('Testing using Jest Fake Timers', () => {
    const data2 = doubleNumberDelay(4)
    jest.runAllTimers()
    expect(data2).toBe(8)
  })
})
