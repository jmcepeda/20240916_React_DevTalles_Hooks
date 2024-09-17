import { heroes } from "./data/heroes";

import { heroes2 } from "./data/heroes";

import { villanos } from "./data/villanos";

console.log("Heroes:", heroes);

console.log("Heroes2:", heroes2);

console.log("Villanos:", villanos);

const getHeroebyId = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};

const getHeroebyId2 = (id) =>
  heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });

const getHeroebyId3 = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroebyId(2));
console.log(getHeroebyId2(3));
console.log(getHeroebyId3(4));
