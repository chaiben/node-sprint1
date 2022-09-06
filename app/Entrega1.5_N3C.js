console.log("+-------------------------+");
console.log("| Entrega 1.5 - Nivel 3 C |");
console.log("+-------------------------+");
console.log("");

// C) Crea una altra funció que:
//  - desencripti i
//  - descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

const fs = require("fs");

const ALGORITME = "aes-192-cbc";
const PASSWORD = "Bon dia mundo! Buscar a Nemo";
const crypto = require("crypto");

//let iv = crypto.randomBytes(16); // Random initialization vector - this is not secret

let iv = "1234567812345678"; // Random initialization vector - this is not secret

const decriptyData = (encryeted) => {
  let key = crypto.scryptSync(PASSWORD, "salt", 24);
  let decipher = crypto.createDecipheriv(ALGORITME, key, iv);
  let decrypted = decipher.update(encryeted, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
};

const descriptFile = () => {
  fs.readFile("FileHexCrypted.txt", "utf-8", (err, criptyData) => {
    let data = decriptyData(criptyData);
    // let buff = Buffer.from(data);
    fs.writeFile("FileHex_Copia.txt", data, (err) => {
      if (err) throw err;
      else console.log("FileHex_Copia.txt created")
    });
  });
  fs.readFile("File64Crypted.txt", "utf-8", (err, criptyData) => {
    let data = decriptyData(criptyData);
    // let buff = Buffer.from(data);
    fs.writeFile("File64_Copia.txt", data, (err) => {
      if (err) throw err;
      else console.log("File64_Copia.txt created")
    });
  });
};

descriptFile();