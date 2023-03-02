const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('selection'))
    selection = urlParams.get('selection');
else
    selection = "japon";

var resa = new Reservation(selection);

window.onload = () => {

    document.getElementById("form").addEventListener('change', changeForm);

    let template = document.querySelector("#template");

    let clone = document.importNode(template.content, true);
    newsejour = clone.firstElementChild.innerHTML
        .replace(/{{destination}}/g, resa.destination)
        .replace(/{{description}}/g, resa.description);
    newimg = clone.lastElementChild.innerHTML
        .replace(/{{destination}}/g, resa.value)
        .replace(/{{imgDest}}/g, resa.images[0]);
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

    let demain = new Date();
    demain.setDate(new Date().getDate() + 1);
    document.getElementById('date-debut').value = demain.toISOString().substring(0,10);

    let lendemain = new Date();
    lendemain.setDate(demain.getDate() +1 );
    document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);

    if (sessionStorage.getItem("critere")){
        crit = JSON.parse(sessionStorage.getItem("critere"));
        document.getElementById("date-debut").value = crit.datedebut ;
        document.getElementById("date-fin").value = crit.datefin;
        document.getElementById("nb-adulte").value= crit.nbadulte ;
        document.getElementById("nb-enfant").value = crit.nbenfant;
        document.getElementById("petitdej").checked = crit.petitdej;
    }

    changeForm();
}

function onUpdate(){
    console.log("à implementer avec la météo : " + resa.temperature);
}

function resetTab(){
    document.getElementById('solde-destination').innerHTML =
        "        <tr>\n" +
        "            <th>Element</th>\n" +
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
    document.getElementById('form').reset();
    changeForm();
}