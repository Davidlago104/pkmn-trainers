const pokemonMaker = document.querySelector("#pokemon-form")

console.log(pokemonMaker)

pokemonMaker.addEventListener("submit", function(e){
    e.preventDefault()

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
    .then(function(trainers){
        console.log(trainers)
    })
})