console.log("+-------------+");
console.log("| Entrega 1.5 |");
console.log("+-------------+");
console.log("");
//Nivel 1 - Ejercicio 1
const FILE = "newFile.txt";
const fs = require("fs");

const writePhrase = () =>
  fs.writeFile(
    FILE,
    `Hola Marçal!
Que tal estás?
Hoy hace mucho calor... y como estoy estudiando... ufff
Pero bueno... el sacrificio seguro que valdrá.

Animo!`,
    (err) => {
      if (err) throw err;
    }
  );

writePhrase();

// Nivel 1 - Ejercicio 2
const readPhrase = () =>
  fs.readFile(FILE, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

readPhrase();

// Nivel 1 - Ejercicio 3
const zlib = require("zlib");
const gzip = zlib.createGzip();

const input = fs.createReadStream(FILE);
const output = fs.createWriteStream(`${FILE}.gz`);

input.pipe(gzip).pipe(output);

//Nivel 2 - Ejercicio 1
const recursiveCountDown = (n) => {
  if (!/^\d+$/.test(n)) {
    console.log("Please, enter a number");
  }
  setTimeout(() => {
    if (n === 0) {
      console.log(n);
    } else {
      console.log(n);
      recursiveCountDown(n - 1);
    }
  }, 1000);
};

recursiveCountDown(3);

// Nivel 2 - Ejercicio 2
const cp = require("child_process");
const { stdout, stderr } = require("process");

const homedir = require("os").homedir();

const exec_options = {
  cwd: homedir,
  env: null,
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024, // 200k
  killSignal: "SIGTERM", // señal de terminación, que solicita al proceso limpiar su estado y salir.
};

cp.exec("ls -l", exec_options, (err, stdout, stderr) => {
  if (err) console.log("N2E2", new Error(stderr));
  else console.log("N2E2", stdout);
});

//Nivel 3 - Ejercicio 1
// A) Crea una funció que creï dos fitxers a partir del fitxer del nivell 1, codificats en:
// - hexadecimal
// - base64 respectivament
const file2HexAndBase64 = () => {
  // Read file
  fs.readFile(FILE, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      let buff = Buffer.from(data);
      fs.writeFile("FileHex.txt", buff.toString("hex"), (err) => {
        if (err) throw err;
      });
      fs.writeFile("File64.txt", buff.toString("base64"), (err) => {
        if (err) throw err;
      });
    }
  });
  // fs.readFile("./File64.txt", "utf-8" , (err, data) => {
  //   console.log("base64:", Buffer.from(data, "base64").toString("utf-8"));
  // });
  // fs.readFile("./FileHex.txt", "utf-8", (err, data) => {
  //   console.log("hex:", Buffer.from(data, "hex").toString("utf-8"));
  // });
};


// B) Crea una funció que
//  - guardi els fitxers del punt anterior encriptats amb l'algoritme aes-192-cbc,
//  - i esborri els fitxers inicials.

const ALGORITME = "aes-192-cbc";
const PASSWORD = "Bon dia mundo! Buscar a Nemo";
const crypto = require("crypto");
//let iv = crypto.randomBytes(16); // Random initialization vector - this is not secret
let iv = "1234567812345678"; // Random initialization vector - this is not secret

const criptyData = (secret_message) => {
  let key = crypto.scryptSync(PASSWORD, "salt", 24);

  let cipher = crypto.createCipheriv(ALGORITME, key, iv);
  let encryeted = cipher.update(secret_message, "utf-8", "hex");
  encryeted += cipher.final("hex");
  return encryeted;
};

const cryptFile = () => {
  fs.readFile("FileHex.txt", "utf-8", (err, data) => {
    if (err) throw err;
    else {
      fs.writeFile("FileHexCrypted.txt", criptyData(data), (err) => {
        if (err) throw err;
        else
          console.log("uncomment here")
          // fs.unlink("FileHex.txt", (err) => {
          //   if (err) throw err;
          // });
      });
    }
  });
  fs.readFile("File64.txt", "utf-8", (err, data) => {
    if (err) throw err;
    else {
      fs.writeFile("File64Crypted.txt", criptyData(data), (err) => {
        if (err) throw err;
        else
          console.log("uncomment here")
          // fs.unlink("File64.txt", (err) => {
          //   if (err) throw err;
          // });
      });
    }
  });
};



// C) Crea una altra funció que:
//  - desencripti i
//  - descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

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
    fs.writeFile("FileHexNew.txt", data, (err) => {
      if (err) throw err;
    });
  });
  fs.readFile("File64Crypted.txt", "utf-8", (err, criptyData) => {
    let data = decriptyData(criptyData);
    // let buff = Buffer.from(data);
    fs.writeFile("File64New.txt", data, (err) => {
      if (err) throw err;
    });
  });
};

// Inclou un README amb instruccions per a l'execució de cada part.

//file2HexAndBase64();
//cryptFile();
descriptFile();
