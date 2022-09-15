console.log('+-------------+')
console.log('| Entrega 1.2 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1
console.log('Nivel 1 - Ejercicio 1')
console.log(((a, b) => a + b)(5, 8))

// Nivel 2 - Ejercicio 1
console.log('Nivel 2 - Ejercicio 1')
class Generic {
  constructor (a) {
    this.val = a
  }
}
const recieveValue = (value) => new Generic(value)
console.log(recieveValue('Hola mundo').val)

// Nivel 2 - Ejercicio 2
console.log('Nivel 2 - Ejercicio 2')
class Persona {
  constructor (nom) {
    this.nom = nom
  }

  dirNom () {
    console.log(this.nom)
  }
}

const persona = new Persona('Marçal')
persona.dirNom()

// Nivel 3 - Ejercicio 1
console.log('Nivel 3 - Ejercicio 1')

class Vehiculo {
  constructor () {
    if (this.constructor === Vehiculo) {
      throw new Error('Abstract class cannot be instantiated')
    }
  }

  ruedas () {
    throw new Error('This method must be implemented')
  }

  bocina () {
    console.log('biiii')
  }
}

class Moto extends Vehiculo {
  ruedas () {
    console.log(2)
  }
}

class Coche extends Vehiculo {
  ruedas () {
    console.log(4)
  }
}

const moto = new Moto()
const coche = new Coche()
moto.bocina()
moto.ruedas()
coche.bocina()
coche.ruedas()
