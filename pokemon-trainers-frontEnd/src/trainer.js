const trainerButton = document.getElementById("show-trainers")
const trainerMaker = document.getElementById("trainer-form")
const name = document.querySelector("#n")
const age = document.querySelector("#a")

trainerMaker.addEventListener("submit", function () {
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
        .then(function (trainer) {
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
            trainerContainerEmpty.innerHTML = "All THE TRAINERS"
            trainers.data.forEach(function (trainer) {
                const trainerEl = document.createElement('p')
                trainerEl.innerText = trainer.attributes.name
                trainerContainerEmpty.appendChild(trainerEl)
            })
        })
})