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
  <section class="pokeTab ${pokemon.type}">
    <h1 class="pokeStatusTitle">${pokemon.name}</h1>
          <p class="pokeID">#${pokemon.number}</p>
          <ol class="tabTypes ${pokemon.type}">    
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
              </ul>
          <div class="contentTab">
          <div class="pokeListStatus">
          <ol class="pokeStatusDefinition">
              <li>Height</li>
              <li>Weight</li>
              <li>Abilities</li>
          </ol>
          <ol class="pokeStatusData">
              <li>${pokemon.height}</li>
              <li>${pokemon.weight}</li>
              <li>${pokemon.abilities
                .map((ability) => `<li class="type">${ability}</li>`)
                .join("")}
          </ol>
          </div>
          <p>Stats</p>
          <div class="pokeListStatus">
          <ol class="pokeStatusDefinition">
              <li>HP</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>SpecialAttack</li>
              <li>Speed</li>
          </ol>
          <ol class="pokeStatusData">
              <li>${pokemon.hp}</li>
              <li>${pokemon.attack}</li>
              <li>${pokemon.defense}</li>
              <li>${pokemon.specialAttack}</li>
              <li>${pokemon.speed}</li>

          </ol>
      </div>
      </div>
      </section>
    </section>`;
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
