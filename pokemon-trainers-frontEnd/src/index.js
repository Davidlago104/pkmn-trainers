const homeButtonWorking = document.getElementById("homeButton")

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    trainerSelect();

    const getPokemonForm = document.querySelector("#pokemon-form")
    const getTrainerForm = document.querySelector("#trainer-form")

    getPokemonForm.addEventListener("submit", (e) =>
    createFormPokemon(e));

    getTrainerForm.addEventListener("submit", (e) =>
    createFormTrainer(e));
});

// While creating a pokemon, the trainer can be selected through a dropdown
function trainerSelect() {
  fetch("http://localhost:3000/trainers")
    .then((response) => response.json())
    .then((trainers) => {
      console.log(trainers);
      let trainerSelect = document.querySelector("#trainer-select");
      trainers.data.forEach((trainer) => {
        let option = document.createElement("option");
        option.setAttribute("text", trainer.attributes.name);
        option.setAttribute("value", trainer.id);
        option.innerHTML = trainer.attributes.name;
        trainerSelect.appendChild(option);
      });
    });
}

homeButtonWorking.addEventListener("click", function(){
    // alert("working?")
    location.reload();
})

function myFunction() {
    var x = document.getElementById("poke-form");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
     }
 }
 
function myFunction2() {
    var x = document.getElementById("trainer-form");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
     }
 }

//  creates a pokemon through the form, with help from the backend
function createFormPokemon(e){
    e.preventDefault()
    const nameInput = document.querySelector("#p").value
    const locationInput = document.querySelector("#l").value
    const moveInput = document.querySelector("#m").value
    const trainerId = parseInt(document.querySelector("#trainer-select").value)
    postFetchPokemon(nameInput, locationInput, moveInput, trainerId)
}

// creates a trainer with the help of the backend
function createFormTrainer(e){
    e.preventDefault()
    const trainerInput = document.querySelector("#n").value
    const ageInput = document.querySelector("#a").value
    postFetchTrainer(trainerInput, ageInput)

}
// prints the pokemon along with trainer id
function postFetchPokemon (nameInput, locationInput, moveInput, trainerId){
    console.log(nameInput, locationInput, moveInput, trainerId)
}

// prints trainer information
function postFetchTrainer (trainerInput, ageInput){
    console.log(trainerInput, ageInput)
}