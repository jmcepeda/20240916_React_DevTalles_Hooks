// Promises

//resolve: Es el resultado positivo del callback
// reject: Es el resultado negativo del callback

import { getHeroebyId, getHerosbyOwners } from "./bases/08-import-export";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numRandom = Math.random() * 10;
    console.log(numRandom);
    if (numRandom > 5) {
      const heroe = getHeroebyId(2);
      resolve(heroe);
      console.log("La promesa se cumplió");
    } else {
      // reject("La promesa falló");
      const heroesOwner = getHerosbyOwners("DC");
      console.log(heroesOwner);
    }
  }, 1000);
});

// console.log(promesa);

// Hay Tres métodos muy importante

// Then: Se ejecuta si la promesa se resolvión de forma positiva

// Catch: Se ejecuta si la promesa se resolvión de forma negativa

// Finally: Se Ejecuta siempre independientemente de si la promesa se resolvión de forma positiva o de forma negativa

promesa.then((heroe) => {
  console.log("Then de la promesa");
  console.log(heroe);
});

promesa.catch(() => {
  console.log("Catch de la promesa");
});
