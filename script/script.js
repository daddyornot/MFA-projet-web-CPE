$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

let voyages = {
    "japon": {
        "destination": "Le Japon",
        "description": "Le japon est beau",
        "images": ["assets/img/japon/beach.jpg", "assets/img/japon/buildings.jpg", "assets/img/japon/fuji.jpg", "assets/img/japon/temple.jpg"],
        "prix-nuit": 400,
        "prix-petitdej": 15,
        "Annimaux": false,
    },
    "maldive": {
        "destination": "Les Maldives",
        "description": "Les maldive y'a de l'eau",
        "images": ["assets/img/maldive/01.avif", "assets/img/maldive/02.avif", "assets/img/maldive/03.avif"],
        "prix-nuit": 300,
        "prix-petitdej": 15,
        "animaux": true,
    }
}

window.onload = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    document.getElementById("form").addEventListener('change', changeform);

    if (urlParams.get('selection'))
        var selection = urlParams.get('selection');
    else
        var selection = "japon";

    console.log(voyages[selection].destination);
    document.getElementById("titre-destination").innerHTML = voyages[selection].destination;
    document.getElementById("desc-destination").innerHTML = voyages[selection].description;
    document.getElementById("img-destination").setAttribute('src', voyages[selection].images[0]);
    if (voyages[selection].animaux)
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux sont acceptés !";
    else
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux ne sont pas acceptés désolé !";

}

function changeform() {
    console.log('Onchangeform');
    let form = document.getElementById("form");
    let solde = document.getElementById('solde-destination');
    let datedebut = form.getElementById('date-debut').value;
    let datefin = form.getElementById('date-fin').value;
    console.log(datedebut);
    console.log(datefin);
    let nbrjour = datefin - datedebut;
};