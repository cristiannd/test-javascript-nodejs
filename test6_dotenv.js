// Vamos a crear nuestra propia utilidad 'dotenv'.
// - La utilidad debe devolver un método config que lee el archivo .env
//   y añade las variables de entorno que haya en el archivo al objeto process.env

// const dotenv = require("./dotenv.js")
// dotenv.config()

// console.log(process.env.PORT)
// console.log(process.env.TOKEN)

import fs from "node:fs";

export function config({ path = ".env" } = {}) {
  try {
    const env = fs.readFileSync(path, "utf8");
    const lines = env.split("\n");

    lines.forEach((e) => {
      const [key, ...value] = e.split("=");
      const joinedValue = value.join("=");

      process.env[key] = joinedValue;
    });
  } catch (error) {
    console.error(error);
  }
}

config();
console.log('PORT:', process.env.PORT);
console.log('TOKEN:', process.env.TOKEN);
