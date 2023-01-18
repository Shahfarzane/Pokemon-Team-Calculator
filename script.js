const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    cp: 439,
    imgSrc: "https://www.serebii.net/art/th/1.png",
  },
  {
    id: 37,
    name: "Vulpix",
    cp: 194,
    imgSrc: "https://www.serebii.net/art/th/37.png",
  },
  {
    id: 134,
    name: "Vaporeon",
    cp: 2469,
    imgSrc: "https://www.serebii.net/art/th/134.png",
  },
  {
    id: 130,
    name: "Gyarados",
    cp: 2406,
    imgSrc: "https://www.serebii.net/art/th/130.png",
  },
  {
    id: 25,
    name: "Pikachu",
    cp: 455,
    imgSrc: "https://www.serebii.net/art/th/25.png",
  },
  {
    id: 27,
    name: "Sandshrew",
    cp: 710,
    imgSrc: "https://www.serebii.net/art/th/27.png",
  },
  {
    id: 52,
    name: "Meowth",
    cp: 121,
    imgSrc: "https://www.serebii.net/art/th/52.png",
  },
];

pokemonArray = [];
let chosenPokemonArray = [];
let points = [];

let classN = [".available", ".choosen"];

function createPokemonCard(pokemons, classN) {
  pokemons.forEach(function (pokemon) {
    const pokemonCard = document.createElement("article");
    pokemonCard.classList.add("pokemon");
    pokemonCard.setAttribute("id", pokemon.id);
    console.log(pokemon.id);
    const availablePokemons = document.querySelector(classN);
    availablePokemons.appendChild(pokemonCard);
    const pokemonIconHolder = document.createElement("div");
    const img = document.createElement("img");
    img.src = pokemon.imgSrc;
    const info = document.createElement("div");
    info.classList.add("info");
    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText = pokemon.name;
    const point = document.createElement("p");
    point.classList.add("point");
    point.innerText = pokemon.cp + " CP";
    pokemonIconHolder.appendChild(img);
    info.appendChild(name);
    info.appendChild(point);
    pokemonCard.appendChild(pokemonIconHolder);
    pokemonCard.appendChild(info);
    pokemonArray.push(pokemonCard);
    points.push(pokemon.cp);
  });
}

createPokemonCard(pokemons, ".available");
pokemonArray.forEach(function (card) {
  card.addEventListener("click", function () {
    const choosen = document.querySelector(".choosen");
    const total = document.querySelector(".total");
    choosen.appendChild(card);
    chosenPokemonArray.push(card.id);
    console.log(chosenPokemonArray);
    chosenPokemonArray = chosenPokemonArray.map((x) => parseInt(x));

    let totalCP = 0;
    chosenPokemonArray.forEach((id) => {
      let pokemon = pokemons.find((p) => p.id === parseInt(id));
      totalCP += pokemon.cp;
    });
    total.innerText = "Total CP: " + totalCP;
    pokemonArray.splice(pokemonArray.indexOf(card), 1);
  });
});
