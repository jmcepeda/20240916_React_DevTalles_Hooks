const getImagePromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (randomNumber % 2 === 0) {
        resolve(`https://picsum.photos/id/${randomNumber}/500`);
      } else {
        reject(
          new Error(`No se encontró una imagen con el número ${randomNumber}`)
        );
      }
    }, 2000);
  });
  return promesa;
};

getImagePromesa()
  .then((url) => {
    const img = document.createElement("img");
    console.log(url);
    img.src = url;
    document.body.append(img);
  })
  .catch((error) => {
    console.error("Error al cargar la imagen", error);
  });

// console.log(getImagePromesa());

// Ahora Vamos a hacer el mismo Ejercicio pero usando async
