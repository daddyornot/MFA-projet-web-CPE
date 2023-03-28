//Définition des variables
let resa;

window.onload = () => {
    getVoyages(); //Récupération des voyages
    document.getElementById("form").addEventListener('change', changeForm);
}

//Une fois que les voyages sont récupérés
function start() {
    const urlParams = new URLSearchParams(window.location.search);
    //On récupère par la méthode get la destination choisie
    if (urlParams.get('selection'))
        selection = urlParams.get('selection');
    else
        selection = "japon";

    resa = new Reservation(selection); //on initie une reservation en fonction de la destination
    document.body.style.background = `url(${resa.images[0]}) no-repeat center center fixed`; //On définit le 1er background
    document.body.style.backgroundSize = 'cover';

    //Permet de changer d'image avec les fleches du clavier
    document.body.addEventListener("keyup", function (key) {
        if (key.code === "ArrowRight") {
            imgNext();
        }
        if (key.code === "ArrowLeft") {
            imgPrevious();
        }
    })

    generationTemplate();
    ecritureCritere();
    verificationDate();
    changeForm();
    onUpdate();
}

//Quand on reçoit les températures
function onUpdate() {
    resa.updateTemp(); //on met à jour la reservation
    document.getElementById("temperature").innerHTML = resa.temperature + "°C"; //on affiche la température
}

function generationTemplate() {
    //Template unique pour afficher les informations du voyage
    let template = document.querySelector("#template");
    let clone = document.importNode(template.content, true);
    let newsejour = clone.firstElementChild.innerHTML
        .replace(/{{destination}}/g, resa.destination)
        .replace(/{{description}}/g, resa.description);
    let newimg = clone.lastElementChild.innerHTML
        .replace(/{{destination}}/g, resa.value)
        .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
        .replace(/{{imgDest}}/g, resa.images[0])
        .replace(/{{temperature}}/g, resa.temperature);
    clone.firstElementChild.innerHTML = newsejour;
    clone.lastElementChild.innerHTML = newimg;
    document.getElementById("main-container").innerHTML = "";
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
}

//Fonction pour réinitialiser le tableau du détail du prix
function resetTab() {
    document.getElementById('solde-destination').innerHTML =
        "        <tr>\n" +
        "            <th></th>\n" +
        "            <th>Nombre de jours</th>\n" +
        "            <th>Nombre de personne</th>\n" +
        "            <th>Prix unitaire</th>\n" +
        "            <th>Prix</th>\n" +
        "        </tr>";
}

//Fonction pour ajouter une ligne au tableau du détail du prix
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

//Quand le formulaire change
function changeForm() {
    resetTab(); //on reset le tableau du détail prix
    resa.setValue(); //on met à jour les valeurs dans la reservation

    if (resa.check) { //Si les valeurs sont validées
        //On permet la validation et on crée le tableau avec les différentes valeurs
        document.getElementById('btnvalider').disabled = false;
        addLigne(["Nuits adultes", resa.nbJour, resa.nbAdulte, resa.prixNuit, resa.totalAdulte]);
        addLigne(["Nuits enfants", resa.nbJour, resa.nbEnfant, resa.prixnuitenfant, resa.totalEnfants]);

        if (resa.petitDej)
            addLigne(["Petits déjeuner", resa.nbJour, resa.nbPersonnes, resa.prixPetitDej, resa.totalpetitdej]);

        addLigne(["Total", resa.nbJour, resa.nbPersonnes, "-", resa.total]);
        lectureCritere(); //On met à jour le sessionStorage des critères pour pouvoir les récupérer plus tard
    } else {
        // Sinon, on désactive le bouton et on affiche un message
        document.getElementById('solde-destination').innerHTML = "Veuillez selectionner des dates correctes";
        document.getElementById('btnvalider').disabled = true;
    }
}

function valider() {
    const resa = new Reservation(selection);
    resa.setValue();
    if (resa.check) {
        //On crée un panier
        const panier = new ListeReservations();
        //on récupère les éventuelles précédentes réservation
        panier.setFromLocalStorage();
        //on ajoute la reservation
        panier.add = resa;
        //on redirige l'utilisateur
        location.href = "panier.html";
    } else {
        alert("Veuillez selectionner des dates correctes");
    }
}

//Réinitialisation du formulaire
function resetForm() {
    //valeur par défaut
    document.getElementById("nb-adulte").value = 1;
    document.getElementById("nb-enfant").value = 0;
    document.getElementById("petitdej").checked = false;
    sessionStorage.clear(); //on vide le sessionStorage
    ecritureCritere(); //écriture des valeurs pas défaut
    verificationDate(); //écriture des dates par défaut
    changeForm(); //On met à jour le tableau du détail du prix
}