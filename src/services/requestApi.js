async function getPokemons(limit, offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json()
    return pokemon
}

async function getPokeAbility(url) {
    const response = await fetch(url)
    const pokemons = await response.json()
    return pokemons
}


export { getPokemons, getPokemon, getPokeAbility }