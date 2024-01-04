const htmlPokemon= document.getElementById('pokemonList');
const loadMore= document.getElementById('loadMoreButton');
const limit = 10;
let offset = 0;
let orderPokemon = 0;

function loadPokemonItens(offset, limit){
    function convertPokemonToLi(pokemon) {
        orderPokemon++;
        return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${orderPokemon}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
        `;
    }
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        htmlPokemon.innerHTML+=pokemons.map(convertPokemonToLi).join("")

        // const listItens =[];
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItens.push(convertPokemonToLi(pokemon))
        // }
        
        // console.log(listItens)
    })
    .catch((error) => console.log(error))
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click',()=>{
    offset +=limit;
    loadPokemonItens(offset, limit  )
})

// fetch(url)
// .then(function (response) {
//     response
//         .json()
//         .then(function (responseBody) {
//             console.log(responseBody);
//         })
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(function () {
//     console.log('requisição concluida');
// })

