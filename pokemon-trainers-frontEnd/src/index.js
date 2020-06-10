
const homeButtonWorking = document.getElementById("homeButton")

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

 