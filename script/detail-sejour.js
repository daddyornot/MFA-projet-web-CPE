
window.onload = () => {

    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById("form").addEventListener('change', changeForm);
    if (urlParams.get('selection'))
        selection = urlParams.get('selection');
    else
        selection = "japon";
    levoyage = new Voyage(selection);
    document.getElementById("titre-destination").innerHTML = levoyage.destination;
    document.getElementById("desc-destination").innerHTML = levoyage.description;
    document.getElementById("img-destination").setAttribute('src', levoyage.sImage);
    if (levoyage.animaux)
        document.getElementById("animaux-destination").innerHTML = document
            .getElementById("animaux-destination").innerHTML + "Les animaux sont acceptés !";
    else
        document.getElementById("animaux-destination").innerHTML = document
            .getElementById("animaux-destination").innerHTML + "Les animaux ne sont pas acceptés désolé !";

    let demain = new Date()
    demain.setDate(new Date().getDate() + 1);
    document.getElementById('date-debut').value = demain.toISOString().substring(0,10);

    let lendemain = new Date()
    lendemain.setDate(demain.getDate() +1 );
    document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);

    changeForm();
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
    var resa = new Reservation(selection);
    resa.setValue();

    addLigne(["Nuits adultes", resa.nbJour, resa.nbAdulte, resa.prixNuit, resa.totalAdulte]);
    addLigne(["Nuits enfants", resa.nbJour, resa.nbEnfant, resa.prixnuitenfant , resa.totalEnfants]);

    if (resa.petitDej)
        addLigne(["Petits déjeuner", resa.nbJour, resa.nbPersonnes, resa.prixPetitDej , resa.totalpetitdej]);

    addLigne(["Total", resa.nbJour, resa.nbPersonnes , "-" , resa.total]);
}

function valider(){
    var resa = new Reservation(selection);
    resa.setValue();
    var panier = new Panier();
    panier.add = resa;
}