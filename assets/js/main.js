var orderPokemon = 0;
function convertPokemonToLi(pokemon) {
    // Certifique-se de que 'orderPokemon' está definido
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


const htmlPokemon= document.getElementById('pokemonList')
pokeApi.getPokemons()
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