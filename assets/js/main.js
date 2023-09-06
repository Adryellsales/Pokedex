const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 10
let offset = 10

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <div class="identificador">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.number}</span>   
        </div>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    })
}

loadPokemonItens()

loadMoreButton.addEventListener("click", () => {
    offset += limit
    loadPokemonItens(offset, limit)
})