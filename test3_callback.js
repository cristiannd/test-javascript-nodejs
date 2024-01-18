// 1. Identifica y corrige los errores.
// 2. Si ves algo innecesario, eliminalo.
// 3. Haz lo necesario para que el código para que siga funcionando con callback.
// 4. Haz lo que concideres para mejorar la legibilidad.

import fs from "node:fs";

// Callback
export function procesarArchivo(callback) {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) callback(`Error leyendo archivo: ${error.message}`);

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile("output.txt", textoProcesado, (error) => {
      if (error)
        callback(`Error guardando archivo: ${error.messageerror.message}`);
      else callback(null, "Archivo procesado y guardado con éxito");
    });
  });
}

const callbackFunc = (error, message) => {
  if (error) console.error(error);
  else console.log(message);
};
procesarArchivo(callbackFunc);

// Async / Await
export async function procesarArchivoPromise() {
  let contenido = '';

  try {
    contenido = await fs.promises.readFile("input.txt", "utf8");
  } catch (error) {
    console.error("Error al leer el archivo:", error);
    throw error;
  }

  const textoProcesado = contenido.toUpperCase();

  try {
    await fs.promises.writeFile("output.txt", textoProcesado);
  } catch (error) {
    console.error("Error al escribir en nuevo archivo:", error);
    throw error;
  }
}

await procesarArchivoPromise();
