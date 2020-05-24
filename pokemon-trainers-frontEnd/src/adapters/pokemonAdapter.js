class PokemonAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/pokemons'
    }

    getPokemon() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}