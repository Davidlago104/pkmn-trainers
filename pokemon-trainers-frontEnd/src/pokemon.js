const pokemonMaker = document.getElementById("pokemon-form")
const pokemonButton = document.getElementById("show-pokemon")
const sortButton = document.getElementById("sort")
class Pokemon {
    constructor(name, location, move, trainer_id){
        this.name = name;
        this.location = location;
        this.move = move;
        this.trainer_id = trainer_id;
    }
};

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

sortButton.addEventListener("click", function(e) {
   fetch("http://localhost:3000/pokemons")
   .then(function(res) {
       return res.json()
   })
   .then(function (pokemons) {
        pokemons.data.sort(function (a, b) {
        var nameA = a.attributes.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
        });

        const sortpkmn = document.getElementById("sortedPokemon");
        const pokemonP = document.createElement("p");
        // pokemonEl.innerText = pokemons.name;
    })
})

pokemonMaker.addEventListener("submit", function (e) {
    // e.preventDefault();
    const location = document.querySelector("#l")
    const name = document.querySelector("#p")
    const move = document.querySelector("#m")
    const trainer_id = document.querySelector("#trainer-select")
    
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
    