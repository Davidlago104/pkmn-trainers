const pokemonMaker = document.querySelector("#pokemon-form")
const pokemonButton = document.querySelector("#show-pokemon")
const trainerButton = document.querySelector("#show-trainers")
const trainerMaker = document.querySelector("#trainer-form")

pokemonButton.addEventListener("click", function(e){
    e.preventDefault();
    fetch('http://localhost:3000/pokemons')
    .then(function(res){
        return res.json()
    })
    .then(function(pokemons){
        const pokemonContainer = document.querySelector("#poke-container")
        console.log(pokemons)

        pokemons.data.forEach(function(pokemon){
            const pokemonEl = document.createElement('p')
            pokemonEl.innerText = pokemon.attributes.name
            pokemonContainer.appendChild(pokemonEl)
        })
    })
})

console.log(pokemonMaker)

pokemonMaker.addEventListener("submit", function(e){
    e.preventDefault();

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
    .then(function(pokemons){
        console.log(pokemons)
    })
})

trainerMaker.addEventListener('click', function(e) {
    e.preventDefault();
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
        return res.json
    })
    .then(function(trainers){
        console.log(trainers)
    })
})

trainerButton.addEventListener("click", function (e) {
    e.preventDefault();
    fetch('http://localhost:3000/trainers')
        .then(function (res) {
            return res.json()
        })
        .then(function (trainers) {
            const trainerContainer = document.querySelector("#trainer-container")
            console.log(trainers)

            trainers.data.forEach(function (trainer) {
                const trainerEl = document.createElement('p')
                trainerEl.innerText = trainer.attributes.name
                trainerContainer.appendChild(trainerEl)
            })
        })
})


pokemonButton.addEventListener("click", function (e) {
    e.preventDefault();
    fetch('http://localhost:3000/pokemons')
        .then(function (res) {
            return res.json()
        })
        .then(function (pokemons) {
            const pokemonContainer = document.querySelector("#poke-container")
            console.log(pokemons)

            pokemons.data.forEach(function (pokemon) {
                const pokemonEl = document.createElement('p')
                pokemonEl.innerText = pokemon.attributes.name
                pokemonContainer.appendChild(pokemonEl)
            })
        })
})