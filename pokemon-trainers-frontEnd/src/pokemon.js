const pokemonMaker = document.getElementById("pokemon-form")
const pokemonButton = document.getElementById("show-pokemon")

class Pokemon {
    constructor(name, location, move, trainer_id){
        this.name = name;
        this.location = location;
        this.move = move;
        this.trainer_id = trainer_id;
    }
    cry() {
        return `${this.name}`;
    }
}
pokemonButton.addEventListener("click", function (e) {
    fetch('http://localhost:3000/pokemons')
    .then(function (res) {
        return res.json()
    })
    .then(function (pokemons) {
        const pokemonContainer = document.getElementById("poke-container")
        console.log(pokemons)
        const pokemonContainerEmpty = document.getElementById("poke-container")
        
        pokemonContainerEmpty.innerHTML = "ALL THE POKEMON"
        
        pokemons.data.forEach(function (pokemon) {
            const pokemonEl = document.createElement('p')
            pokemonEl.innerText = pokemon.attributes.name
            pokemonContainer.appendChild(pokemonEl)
        })
    })
})


pokemonMaker.addEventListener("submit", function (e) {
    // e.preventDefault();
    const location = document.querySelector("#l")
    const name = document.querySelector("#p")
    const move = document.querySelector("#m")
    const trainer_id = document.querySelector("#t")
    
        fetch("http://localhost:3000/pokemons", {
            method: "POST",
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
        },
        body: JSON.stringify({
            pokemon: {
                name: name.value,
                location: location.value,
                move: move.value,
                trainer_id: trainer_id.value
            }
        })
    })
        .then(function (res) {
            return res.json
        })
        .then(function (pokemon) {
            console.log(pokemon)
            const pokemonContainer = document.getElementById("poke-container")
            const pokemonEl = document.createElement('p')
            pokemonEl.innerText = pokemon.name
            console.log(pokemonEl)
        })
    })

