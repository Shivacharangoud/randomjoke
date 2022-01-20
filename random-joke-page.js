let jokeTextE = document.getElementById("jokeText");
let jokeBtnE = document.getElementById("jokeBtn");
let spinnerE = document.getElementById("spinner");


function jokeFunction() {
    spinnerE.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerE.classList.toggle("d-none");
            jokeTextE.textContent = jsonData.value;
        })
}

jokeBtnE.addEventListener("click", jokeFunction);