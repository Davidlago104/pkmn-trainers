const trainerButton = document.getElementById("show-trainers")
const trainerMaker = document.getElementById("trainer-form")
const name = document.querySelector("#n")
const age = document.querySelector("#a")
const filter = document.querySelector("#filter-Trainer")

class Trainer {
    constructor(trainer, trainerAttributes){
        this.id = trainer.id;
        this.name = trainerAttributes.name;
        this.age = trainerAttributes.age;
        Trainer.all.push(this)
    }

    renderTrainer(){
    return `
        <div data-id=${this.id}>
            <h3>${this.name}</h3>
        </div>
        <br><br>`;
    }
}

Trainer.all = [];

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
                let newTrainer = new Trainer(trainer, trainer.attributes)
                trainerContainerEmpty.innerHTML += newTrainer.renderTrainer()
            })
        })
})

filter.addEventListener("click", function(e){
    fetch("http://localhost:3000/trainers")
    .then(function (res){
        return res.json()
    })
    .then(function (trainers){
        const result = trainers.data.filter(
            (trainer) => trainer.attributes.age > 24
        );
      filtered = document.querySelector("#filterByAge") 
        result.forEach(function (trainer){
            filtered.innerHTML += trainer.attributes.name
        })
    })
})