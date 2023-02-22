$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

const voyages = {
    "japon": {
        destination: "Le Japon",
        description: "Le japon est beau",
        images: ["assets/img/japon/beach.jpg", "assets/img/japon/buildings.jpg", "assets/img/japon/fuji.jpg", "assets/img/japon/temple.jpg"],
        prixnuit: 400,
        prixdej: 15,
        Annimaux: false,
    },
    "maldive": {
        destination: "Les Maldives",
        description: "Les maldive y'a de l'eau",
        images: ["assets/img/maldive/01.avif", "assets/img/maldive/02.avif", "assets/img/maldive/03.avif"],
        prixnuit: 300,
        prixdej: 15,
        animaux: true,
    }
}

window.onload = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    document.getElementById("form").addEventListener('change', changeform);

    if (urlParams.get('selection'))
        selection = urlParams.get('selection');
    else
        selection = "japon";

    console.log(voyages[selection].destination);
    document.getElementById("titre-destination").innerHTML = voyages[selection].destination;
    document.getElementById("desc-destination").innerHTML = voyages[selection].description;
    document.getElementById("img-destination").setAttribute('src', voyages[selection].images[0]);
    if (voyages[selection].animaux)
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux sont acceptés !";
    else
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux ne sont pas acceptés désolé !";
    changeform();
}

function changeform() {
    console.log('Onchangeform');
    let tab = document.getElementById('solde-destination');
    resettab();

    let form = document.getElementById("form");
    let datedebut = new Date(document.getElementById('date-debut').value);
    let datefin = new Date(document.getElementById('date-fin').value);
    let nbrjour = dateDiff(datedebut, datefin).day;
    console.log(nbrjour);
    let nbadulte = Number(document.getElementById('nb-adulte').value);
    console.log("nb adulte " + nbadulte);
    let nbenfant = Number(document.getElementById('nb-enfant').value);
    console.log("nbenfant " + nbenfant);

    let animaux = document.getElementById('animaux-form').checked;
    console.log("animaux " + animaux);
    let petitdej = document.getElementById('petitdej').checked;
    console.log("petitdej " + petitdej);

    let prixnuit = voyages[selection].prixnuit;
    let prixdej = voyages[selection].prixdej;
    console.log(prixnuit);
    let total = 0;
    addligne(["Nuits adultes", nbrjour, nbadulte, prixnuit, prixnuit * nbadulte * nbrjour]);
    total += prixnuit * nbadulte * nbrjour;
    addligne(["Nuits enfants", nbrjour, nbenfant, 0.6 * prixnuit , 0.6 * prixnuit * nbenfant * nbrjour]);
    total += 0.6 * prixnuit * nbenfant * nbrjour;

    if (petitdej){
        addligne(["Petits déjeuner", nbrjour, nbenfant + nbadulte, prixdej , prixdej * nbrjour * (nbenfant + nbadulte)]);
        total += prixdej * nbrjour * (nbenfant + nbadulte);
    }

    addligne(["Total", nbrjour, nbenfant + nbadulte, "-" , total]);


};

function addligne(ligne) {
    var row = document.createElement("tr");
    for (txt of ligne) {
        var cell = document.createElement("td");
        text = document.createTextNode(txt);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    document.getElementById('solde-destination').appendChild(row);
}

function resettab(){
    document.getElementById('solde-destination').innerHTML =
    "        <tr>\n" +
    "            <th>Element</th>\n" +
    "            <th>Nombre de jours</th>\n" +
    "            <th>Nombre de personne</th>\n" +
    "            <th>Prix unitaire</th>\n" +
    "            <th>Prix</th>\n" +
    "        </tr>";
}

function dateDiff(date1, date2) {
    var diff = {} // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
}