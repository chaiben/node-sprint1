class Generic {
  constructor (a) {
    this.val = a
  }
}

module.exports.Generic = Generic

// Nivel 2 - Ejercicio 2
class Persona {
  constructor (nom) {
    this.nom = nom
  }

  dirNom () {
    console.log(this.nom)
  }
}
module.exports.Persona = Persona

// Nivel 3 - Ejercicio 1
function CreatorObjectFunction (value) {
  // Accesible variable
  this.value = value

  // No accesible function
  const unaccessibleFunction = (a) => `Value is "${a}"`

  // Accesible function
  this.showResult = () => {
    console.log(unaccessibleFunction(this.value))
  }
};
module.exports.CreatorObjectFunction = CreatorObjectFunction
