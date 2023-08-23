const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const pokeTab = document.getElementById("pokeTab");
const mainList = document.getElementById("content");
const seta = document.getElementById("backTolist");
const limit = 151;
let offset = 0;


seta.addEventListener("click", () => {
  pokeTab.style.display = "none";
  mainList.style.display = "block";
});

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function convertPokemonToStatusTab(pokemon) {
  return `
  <h1 class="pokeStatusTitle">${pokemon.name}</h1>
        <p class="pokeID">#${pokemon.number}</p>
        <ol class="tabTypes">    
            ${pokemon.types
              .map((type) => `<li class="type ${type}">${type}</li>`)
              .join("")}
        </ol>
        <div class="boxImagePokeTab">
            <img class="pokeTabImage" src="${pokemon.photo}" alt="${
    pokemon.name
  }">
        </div>

        <section class="pokeStatus">
            <ul class="navStatus">
                <li>About</li>
                <li>BaseStatus</li>
                <li>Evolution</li>
                <li>Moves</li>
            </ul>
        <div class="contentTab">
        <div class="pokeListStatus">
        <ol class="pokeStatusDefinition">
            <li>Species</li>
            <li>Height</li>
            <li>Weight</li>
            <li>Abilities</li>
        </ol>
        <ol class="pokeStatusData">
            <li>Seed</li>
            <li>"2'3,6"(0.70cm)</li>
            <li>15.2lbs(6.9kg)</li>
            <li>Overgrow, Chlorophyl</li>
        </ol>
        </div>
        <p>Breeding</p>
        <div class="pokeListStatus">
        <ol class="pokeStatusDefinition">
            <li>Gendar</li>
            <li>EggGroups</li>
            <li>EggCycle</li>
        </ol>
        <ol class="pokeStatusData">
            <li>87.5% 12.5%</li>
            <li>Monster</li>
            <li>Grass</li>
        </ol>
    </div>
    </div>
    </section>
`;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");

    for (let i = 0; i < 151; i++) {
      pokemonList.children[i].addEventListener("click", () => {
        mainList.style.display = "none";
        pokeTab.style.display = "block";

        pokeTab.innerHTML = convertPokemonToStatusTab(pokemons[i]);
      });
    }
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
