const homeButtonWorking = document.getElementById("homeButton")

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  trainerSelect();

  const getPokemonForm = document.querySelector("#pokemon-form")

  getPokemonForm.addEventListener("submit", (e) =>
  createFormHandler(e))
});

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
    var x = document.getElementById("trainer-field");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
     }
 }

function createFormHandler(e){
    e.preventDefault()
    const nameInput = document.querySelector("#p").value
    const locationInput = document.querySelector("#l").value
    const moveInput = document.querySelector("#m").value
    const trainerId = parseInt(document.querySelector("#trainer-select").value)
    postFetch(nameInput, locationInput, moveInput, trainerId)
}

function postFetch (nameInput, locationInput, moveInput, trainerId){
    console.log(nameInput, locationInput, moveInput, trainerId);
}