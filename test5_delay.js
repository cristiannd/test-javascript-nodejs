// Escribe una función 'delay' que retorne una promesa que se resuelva después de 'n' milisegundos.

export async function delay(timeInMiliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMiliseconds);
  });
}

console.time("delay");
delay(3000).then(() => {
  console.log("Hola mundo");
  console.timeEnd("delay");
});
