// Transformar la siguiente función para que funcione con promesas en lugar de callbacks:
export function obtenerDatosPromise(callback) {
  setTimeout(() => {
    callback(null, { data: "datos importantes" });
  }, 2000);
}

// Resolución:
export function obtenerDatosPromiseResolved() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "datos importantes" });
    }, 2000);
  });
}

const res = await obtenerDatosPromiseResolved();
console.log(res);
