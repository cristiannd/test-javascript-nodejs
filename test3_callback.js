// 1. Identifica y corrige los errores.
// 2. Si ves algo innecesario, eliminalo.
// 3. Haz lo necesario para que el código para que siga funcionando con callback.
// 4. Haz lo que concideres para mejorar la legibilidad.

export function procesarArchivo() {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      return false;
    }

    setTimeout(() => {
      const textoProcesado = contenido.toUpperCase();

      fs.writeFile("output.txt", textoProcesado, (error) => {
        if (error) {
          console.error("Error guardando archivo:", error.message);
          return false;
        }

        console.log("Archivo procesado y guardado con éxito");
        return true;
      });
    }, 1000);
  });
}
