// Mejorar el siguiente código

import fs from "node:fs";

export function leerArchivos() {
  const archivo1 = fs.readSync("archivo1.txt", "utf8");
  const archivo2 = fs.readSync("archivo1.txt", "utf8");
  const archivo3 = fs.readSync("archivo1.txt", "utf8");

  return `${archivo1} ${archivo2} ${archivo3}`;
}

leerArchivos();