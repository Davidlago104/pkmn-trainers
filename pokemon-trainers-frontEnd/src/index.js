const pokemonMaker = document.getElementById("pokemon-form")
const pokemonButton = document.getElementById("show-pokemon")
const trainerButton = document.getElementById("show-trainers")
const trainerMaker = document.getElementById("trainer-form")

pokemonButton.addEventListener("click", function(e){
    fetch('http://localhost:3000/pokemons')
    .then(function(res){
        return res.json()
    })
    .then(function(pokemons){
        const pokemonContainer = document.getElementById("poke-container")
        console.log(pokemons)
        const pokemonContainerEmpty = document.getElementById("poke-container")

        pokemonContainerEmpty.innerHTML = " "

        pokemons.data.forEach(function (pokemon) {
            const pokemonEl = document.createElement('p')
             pokemonEl.innerText = pokemon.attributes.name
            pokemonContainer.appendChild(pokemonEl)
        })
    })
})

console.log(pokemonMaker)

pokemonMaker.addEventListener("submit", function(e){


    const name = document.querySelector("#p")
    const location = document.querySelector("#l")
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
    .then(function (res){
        return res.json
    })
    .then(function(pokemon){
        console.log(pokemon)
        const pokemonContainer = document.getElementById("poke-container")
        const pokemonEl = document.createElement('p')
        pokemonEl.innerText = pokemon.name

        console.log(pokemonEl)
    })
})

trainerMaker.addEventListener("submit", function(e) {

    const name = document.querySelector("#n")
    const age = document.querySelector("#a")

    fetch("http://localhost:3000/trainers", {
        method: "POST",
        headers: {
            'content-Type': 'application/json',
            'Accept': 'appliction/json'
        },
        body: JSON.stringify({
            trainer: {
                name: name.value,
                age: age.value
            }
        })
    })
    .then(function (res) {
        return res.json()
    })
    .then(function(trainer){
        console.log(trainer)
        const trainerContainer = document.getElementById("trainer-container")
        const trainerEl = document.createElement('p')
        trainerEl.innerText = trainer.name
        
        console.log(trainerEl)
    })
})

trainerButton.addEventListener("click", function (e) {
    e.preventDefault();
    fetch('http://localhost:3000/trainers')
        .then(function (res) {
            return res.json()
        })
        .then(function (trainers) {
            const trainerContainerEmpty = document.getElementById("trainer-container-text")
            console.log(trainers)
            trainerContainerEmpty.innerHTML = " "
            trainers.data.forEach(function (trainer) {
                const trainerEl = document.createElement('p')
                trainerEl.innerText = trainer.attributes.name
                trainerContainerEmpty.appendChild(trainerEl)
            })
        })
})
