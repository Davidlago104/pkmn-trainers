const pokemonMaker = document.getElementById("pokemon-form")
const pokemonButton = document.getElementById("show-pokemon")
const move = document.querySelector("#m")
const trainer_id = document.querySelector("#t")

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
    e.preventDefault();
    const location = document.querySelector("#l")
    const name = document.querySelector("#p")
    
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


    const mockTrainers = new Promise(resolve => {
        const data = [];
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })

function populateSelection() {
    mockTrainers.then(data => {
        let trainerSelection = document.getElementById("lists");
        data.forEach(trainer => {
            let option = document.createElement("option");
            option.setAttribute("value", trainer);
            option.innerHTML = trainer;
            trainerSelection.appendChild(option);
        });
    });
}

populateSelection();

// function trainerSelector() {
//     fetch("http://localhost:3000/trainers")
//     .then(response => response.json())
//     .then(trainers => {
//         let trainerSelect = trainer_id
//         trainers.data.forEach(trainer => {
//             const lists = document.getElementById("lists")
//             let option = document.createElement("option");
//             option.setAttribute('text', trainer.attributes.name);
//             option.setAttribute('text', trainer.id);
//             option.innerHTML = trainer.attributes.category_name;
//             trainerSelector.appendChild(option)
//         })
//     })
// }

