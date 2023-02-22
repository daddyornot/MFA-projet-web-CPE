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
        "Annimaux": true,
    }
}

window.onload = () => {
    let selection = "japon";

    console.log(voyages[selection].destination);
    document.getElementById("titre-destination").innerHTML = voyages[selection].destination;
    document.getElementById("desc-destination").innerHTML = voyages[selection].description;
    document.getElementById("img-destination").setAttribute('src', voyages[selection].images[0]);
}