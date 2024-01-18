// Vamos a crear nuestra propia utilidad 'dotenv'.
// - La utilidad debe devolver un método config que lee el archivo .env
//   y añade las variables de entorno que haya en el archivo al objeto process.env

const dotenv = require("./dotenv.js")
dotenv.config()

console.log(process.env.PORT)
console.log(process.env.TOKEN)