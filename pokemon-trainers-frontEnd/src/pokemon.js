const pokemonMaker = document.getElementById("pokemon-form")
const pokemonButton = document.getElementById("show-pokemon")
const sortButton = document.getElementById("sort")
const endPoint = "http://localhost:3000/pokemons"
class Pokemon {
    constructor(pokemon, pokemonAttributes){
        this.id = pokemon.id;
        this.name = pokemonAttributes.name;
        this.location = pokemonAttributes.location;
        this.move = pokemonAttributes.move;
        this.trainer_id = pokemonAttributes.trainer_id;
        Pokemon.all.push(this)
    }
    
    renderPokemon() {
        
        return `
        <div data-id=${this.id}>
        <h3>${this.name}</h3>
        </div>
        <br><br>`;
    }
}

Pokemon.all = [];

pokemonButton.addEventListener("click", function (e) {
    
    fetch(endPoint)
    .then(function (res) {
        return res.json()
    })
    .then(function (pokemons) {
        const pokemonContainer = document.getElementById("poke-container");
        console.log(pokemons)
        const pokemonContainerEmpty = document.getElementById("poke-container")
        
        pokemonContainerEmpty.innerHTML = "ALL THE POKEMON"
        
        pokemons.data.forEach(function (pokemon) {
            let newPokemon = new Pokemon(pokemon, pokemon.attributes)
            pokemonContainer.innerHTML += newPokemon.renderPokemon()
        })
    })
})
console.log(sortButton)
sortButton.addEventListener("click", function(e) {
    console.log(sortButton)
    fetch(endPoint)
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
        console.log(pokemons.data)
        const sortPkmn = document.getElementById("sortedPokemon");
        const list = document.createElement("ul");
        let sorts = sortPkmn.appendChild(list)
        pokemons.data.forEach(function (pokemon){
            console.log(pokemon.attributes.name)
            const name = pokemon.attributes.name
            let para = document.createElement("p");
            para.innerHTML = name
            list.appendChild(para)
        })
    })
})

pokemonMaker.addEventListener("submit", function () {
    // e.preventDefault();
    const location = document.querySelector("#l")
    const name = document.querySelector("#p")
    const move = document.querySelector("#m")
    const trainer_id = document.querySelector("#trainer-select");
    
    fetch("http://localhost:3000/pokemons", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Accept: "application/json",
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
            .then((response) => response.json())
            .then((pokemon) => {
                console.log(pokemon);
                let newPokemon = new Pokemon(pokemon, pokemon.attributes);
                document.querySelector("#poke-container").innerHTML += newPokemon.renderPokemon();
             });
})
                        
                        