const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonsDetails) {
    const pokemon = new Pokemon();
    pokemon.name = pokemonsDetails.name;
    const types = pokemonsDetails.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokemonsDetails.sprites.other.dream_world.front_default;
    return pokemon;
}


pokeApi.getPokemonDetail=(pokemon)=>{
    return fetch(pokemon.url)
        .then((response)=>response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest)=>Promise.all(detailRequest))
        .then((pokemonsDetails)=>(pokemonsDetails))
        .catch((error)=>console.error(error))
}

// Promise.all([

// ]).then((results)=>{
//     console.log(results)
// })