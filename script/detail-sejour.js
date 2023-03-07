const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('selection'))
    selection = urlParams.get('selection');
else
    selection = "japon";

const resa = new Reservation(selection);
document.body.style.background = `url(${resa.images[0]}) no-repeat center center fixed`;
document.body.style.backgroundSize = 'cover';

window.onload = () => {

    document.getElementById("form").addEventListener('change', changeForm);

    let template = document.querySelector("#template");
    let clone = document.importNode(template.content, true);
    newsejour = clone.firstElementChild.innerHTML
        .replace(/{{destination}}/g, resa.destination)
        .replace(/{{description}}/g, resa.description);
    newimg = clone.lastElementChild.innerHTML
        .replace(/{{destination}}/g, resa.value)
        .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
        .replace(/{{imgDest}}/g, resa.images[0])
        .replace(/{{temperature}}/g, resa.temperature);
    clone.firstElementChild.innerHTML = newsejour;
    clone.lastElementChild.innerHTML = newimg;
    document.getElementById("main-container").innerHTML= "";
    document.getElementById("main-container").appendChild(clone);

    if (resa.animaux)
        document.getElementById("animaux-destination").innerHTML = document
            .getElementById("animaux-destination").innerHTML + "Les animaux sont acceptés !";
    else
        document.getElementById("animaux-destination").innerHTML = document
            .getElementById("animaux-destination").innerHTML + "Les animaux ne sont pas acceptés désolé !";

    if (!resa.petitDejAvailable) {
        document.getElementsByClassName("choix")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
        document.getElementsByClassName("animaux")[0].style.gridColumn = "1/5";
        document.getElementsByClassName("petit-dej")[0].style.gridColumn = "1/5";
        let col = document.getElementsByClassName("col-petit-dej");
        for (let e of col) {
            e.style.display = "none";
        }
        document.getElementById("petit-dej-destination").innerHTML = "Nous ne proposons pas le petit déjeuner pour ce voyage..."
    }

    ecritureCritere();
    verificationDate();
    changeForm();
    onUpdate();
}

function onUpdate(){
    // console.log("à implementer avec la météo : " + resa.temperature);
    document.getElementById("temperature").innerHTML = resa.temperature + "°C";
}

function resetTab(){
    document.getElementById('solde-destination').innerHTML =
        "        <tr>\n" +
        "            <th></th>\n" +
        "            <th>Nombre de jours</th>\n" +
        "            <th>Nombre de personne</th>\n" +
        "            <th>Prix unitaire</th>\n" +
        "            <th>Prix</th>\n" +
        "        </tr>";
}

function addLigne(ligne) {
    var row = document.createElement("tr");
    for (txt of ligne) {
        var cell = document.createElement("td");
        text = document.createTextNode(txt);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    document.getElementById('solde-destination').appendChild(row);
}

function changeForm() {
    resetTab();
    resa.setValue();

    if (resa.check) {
        document.getElementById('btnvalider').disabled = false;
        addLigne(["Nuits adultes", resa.nbJour, resa.nbAdulte, resa.prixNuit, resa.totalAdulte]);
        addLigne(["Nuits enfants", resa.nbJour, resa.nbEnfant, resa.prixnuitenfant, resa.totalEnfants]);

        if (resa.petitDej)
            addLigne(["Petits déjeuner", resa.nbJour, resa.nbPersonnes, resa.prixPetitDej, resa.totalpetitdej]);

        addLigne(["Total", resa.nbJour, resa.nbPersonnes, "-", resa.total]);
        lectureCritere();
    } else {
        document.getElementById('solde-destination').innerHTML = "Veuillez selectionner des dates correctes";
        document.getElementById('btnvalider').disabled = true;
    }
}

function valider() {
    var resa = new Reservation(selection);
    resa.setValue();
    if (resa.check){
        var panier = new Panier();
        panier.add = resa;
        location.href = "panier.html";
    } else {
        alert("Veuillez selectionner des dates correctes");
    }
}

function resetForm(){
    console.log("reset");
    document.getElementById("nb-adulte").value = 1;
    document.getElementById("nb-enfant").value = 0;
    document.getElementById("petitdej").checked = false;
    sessionStorage.clear();
    ecritureCritere();
    verificationDate();
    changeForm();
}