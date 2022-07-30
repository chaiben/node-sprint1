console.log("+-------------+");
console.log("| Entrega 1.5 |");
console.log("+-------------+");
console.log("");
//Nivel 1 - Ejercicio 1
const FILE = 'newFile.txt'
const fs = require('fs');

const writePhrase = () => fs.writeFile(FILE, 'Hola Marçal!\nHola Marçal!\nHola Marçal!\n', err => {
  if(err) throw err;
});

writePhrase()

// Nivel 1 - Ejercicio 2
const readPhrase = () => fs.readFile(FILE, 'utf-8', (err, data) => {
  if(err) throw(err)
  console.log(data);
})

// Nivel 1 - Ejercicio 3
const zlib = require('zlib');
const gzip = zlib.createGzip();

const input = fs.createReadStream(FILE);
const output = fs.createWriteStream(`${FILE}.gz`);

input.pipe(gzip).pipe(output);


readPhrase()