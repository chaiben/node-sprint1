/* eslint-env jest */

const { describe, expect } = require('@jest/globals')

const { Persona, CreatorObjectFunction } = require('../Entrega1.2')

jest.mock('../Entrega1.2')

beforeEach(() => {
  Persona.mockClear()
  CreatorObjectFunction.mockClear()
})

describe('Test class Persona', () => {
  it('Check if the Persona constructor was called', () => {
    Persona('Marçal')
    expect(Persona).toHaveBeenCalledTimes(1)
  })
  it('Check if the dirNom method was called', () => {
    expect(Persona).not.toHaveBeenCalled()
    // Constructor should have been called again:
    const persona = new Persona('Marçal')
    expect(Persona).toHaveBeenCalledTimes(1)

    persona.dirNom()
    const mockPersonaInstance = Persona.mock.instances[0]
    expect(mockPersonaInstance.dirNom).toHaveBeenCalledTimes(1)
  })
})

describe('Test abstract class CreatorObjectFunction', () => {
  it('Check if the CreatorObjectFunction constructor was called', () => {
    CreatorObjectFunction('Marçal')
    expect(CreatorObjectFunction).toHaveBeenCalledTimes(1)
  })
})
