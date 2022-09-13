console.log("+-------------+");
console.log("| Entrega 1.2 |");
console.log("+-------------+");
console.log("");
//Nivel 1 - Ejercicio 1
console.log("Nivel 1 - Ejercicio 1");
console.log(((a, b) => a + b)(5, 8));

//Nivel 2 - Ejercicio 1
console.log("Nivel 2 - Ejercicio 1");
class Generic {
  constructor(a) {
    this.val = a;
  }
}
const recieveValue = (value) => new Generic(value);
console.log(recieveValue("Hola mundo").val);

//Nivel 2 - Ejercicio 2
console.log("Nivel 2 - Ejercicio 2");
class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(this.nom);
  }
}

const persona = new Persona("Marçal");
persona.dirNom();

//Nivel 3 - Ejercicio 1
console.log("Nivel 3 - Ejercicio 1");

function CreatorObjectFunction(value) {
  // Accesible variable
  this.value = value;

  // No accesible function
  const unaccessibleFunction = (a) => `Value is "${a}"`;

  // Accesible function
  this.showResult = () => {
    console.log(unaccessibleFunction(this.value));
  };
};
// String
const obj1 = new CreatorObjectFunction("Marçal");
obj1.showResult();
// Number value
const obj2 = new CreatorObjectFunction(30);
obj2.showResult();
// Empty value
const obj3 = new CreatorObjectFunction();
obj3.showResult();
// Try to access unaccessible function
const obj4 = new CreatorObjectFunction("error");
try {
  obj4.unaccessibleFunction("hola");
} catch(e) {
  console.log("Error message: ", e.message);
};
obj4.showResult();

