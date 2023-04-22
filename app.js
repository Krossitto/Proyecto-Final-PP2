fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarja">
        <img src="${personajes[i].image}" class="rounded-img">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>${personajes[i].gender}</p>      
      </div>
      `;
    }
  });
