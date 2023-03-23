//Définission des variables
var panier;
var panierLocal;
voyagesLocal = [];

window.onload = () => {
    getVoyages(); //On récupère les données
    // on ne teste et valide le form que si les champs sont respectés
    if (checkFields())
        checkAndValidateForm();
}

//Une fois les données récupérés
function start() {
    panier = new ListeReservations();
    panier.setFromLocalStorage();
    //On créer un panierLocal qui va contenir les modifications de l'utilisateur avant d'ètre enregistrer
    panierLocal = new ListeReservations();
    panierLocal.setFromLocalStorage();
    //On récupère la liste des voyages présent dans le panier
    for (let dest of panierLocal.get()) {
        voyagesLocal.push(new Voyage(dest.value));
    }
    creationtableau();
    randomizeBackground();
}

//Quand on reçoit les température
function onUpdate() {
    for (let dest of panierLocal.get())
        dest.update();//On met a jour la température
    creationtableau(); //on recréer le tableau
}

//Suppression d'une reservation par son ID
function remove(id) {
    panier.remove(id);
    panierLocal.remove(id);
    creationtableau();
}

function desactivationDesChamps(toDesactivate) {
    //si le panier est vide, on affiche un petit message
    if (toDesactivate) {
        document.getElementById("contenu-panier").style.display = 'none';
        document.getElementById("panier-vide").style.display = 'flex';
        document.getElementById("panier-vide").innerHTML = "Vous vous trouvez actuellement sur un panier vide, " +
            "on espère qu'il ne le restera pas trop longtemps... 🌴😃";
        document.getElementById("divtotal").style.display = 'none';
        document.getElementsByClassName("info-commande")[0].style.display = 'none';
        document.getElementsByClassName("infos")[0].style.display = 'none';
        document.getElementsByTagName("button")[0].style.display = 'none';
    } // sinon on affiche le panier
    else {
        document.getElementById("panier-vide").style.display = 'none';
        document.getElementById("divtotal").style.display = '';
        document.getElementsByClassName("info-commande")[0].style.display = '';
        document.getElementsByClassName("infos")[0].style.display = '';
        document.getElementsByTagName("button")[0].style.display = '';
    }
}

//Affichage des données
function creationtableau() {
    var listIdModif = []
    // Si le local storage n'existe pas ou s'il est vide, on n'affiche pas le panier
    if (!panierLocal.get() || panierLocal.get().length === 0) {
        desactivationDesChamps(true);
        // sinon on affiche le panier
    } else {
        desactivationDesChamps(false);
        let template = document.querySelector("#listeDestinations");
        let total = 0;
        document.getElementById("divtotal").innerHTML = "";
        document.getElementById("contenu-panier").innerHTML = "";
        for (let voyage of panierLocal.get()) {
            let clone;

            if (voyage.modif) { //Si on souhaite faire une modification sur le cette reservation
                listIdModif.push(voyage.id);
                //On utilise un template avec des inputs
                template = document.querySelector("#modifDestination");
                if (voyage.petitDej)
                    var dej = "checked";
                else
                    var dej = "";
                clone = document.importNode(template.content, true);
                total += voyage.total;
                newDestination = clone.firstElementChild.innerHTML
                    .replace(/{{selection}}/g, voyage.value)
                    .replace(/{{temperature}}/g, voyage.temperature)
                    .replace(/{{destination}}/g, voyage.destination)
                    .replace(/{{dateDebut}}/g, voyage.datedebut.toISOString().substring(0, 10))
                    .replace(/{{dateFin}}/g, voyage.datefin.toISOString().substring(0, 10))
                    .replace(/{{nbAdultes}}/g, voyage.nbAdulte)
                    .replace(/{{nbEnfants}}/g, voyage.nbEnfant)
                    .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
                    .replace(/{{imgDest}}/g, voyage.images[0])
                    .replace(/{{alt}}/g, "Photo de " + voyage.destination)
                    .replace(/{{petitdej}}/g, dej)
                    .replace(/{{prix}}/g, voyage.total)
                    .replace(/{{idVoyage}}/g, voyage.id);
                clone.firstElementChild.innerHTML = newDestination;
                //on insert les anciennes données
                let selectAdulte = clone.getElementById("nbAdultesModif" + voyage.id);
                [...selectAdulte].forEach(element => {
                    if (element.value == voyage.nbAdulte) {
                        element.setAttribute("selected", "");
                    }
                });
                let selectEnfant = clone.getElementById("nbEnfantsModif" + voyage.id);
                [...selectEnfant].forEach(element => {
                    if (element.value == voyage.nbEnfant) {
                        element.setAttribute("selected", "");
                    }
                });
                if (!voyage.petitDejAvailable)
                    clone.getElementById("caseDej" + voyage.id).innerHTML = "Pti dej' non dispo";
            } else {
                //Ici on utilise le template d'affichage
                template = document.querySelector("#listeDestinations");
                if (voyage.petitDej)
                    var dej = "Pti dej' inclus";
                else
                    var dej = "Pas de Pti dej'";
                if (!voyage.petitDejAvailable)
                    dej = "Pti dej' non dispo";

                clone = document.importNode(template.content, true);
                total += voyage.total;
                newDestination = clone.firstElementChild.innerHTML
                    .replace(/{{selection}}/g, voyage.value)
                    .replace(/{{temperature}}/g, voyage.temperature)
                    .replace(/{{destination}}/g, voyage.destination)
                    .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
                    .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
                    .replace(/{{nbAdultes}}/g, voyage.nbAdulte > 1 ? voyage.nbAdulte + " adultes" : voyage.nbAdulte + " adulte")
                    .replace(/{{nbEnfants}}/g, voyage.nbEnfant > 1 ? voyage.nbEnfant + " enfants" : voyage.nbEnfant === 1 ? voyage.nbEnfant + " enfant" : "Pas d'enfants, youpi !")
                    .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
                    .replace(/{{imgDest}}/g, voyage.images[0])
                    .replace(/{{alt}}/g, "Photo de " + voyage.destination)
                    .replace(/{{petitdej}}/g, dej)
                    .replace(/{{prix}}/g, voyage.total)
                    .replace(/{{idVoyage}}/g, voyage.id);
                clone.firstElementChild.innerHTML = newDestination;
            }

            document.getElementById("contenu-panier").appendChild(clone);
            for (let id of listIdModif) //Pour les voyages en cours de modification
                verificationDateModif(id); //on vérifie que la date est bonne et on bloque les dates impossible
        }

        //Utilisation d'un template unique pour afficher le prix total de toute les réservations
        let templatetotal = document.querySelector("#total");
        let clone = document.importNode(templatetotal.content, true);
        newtotal = clone.firstElementChild.innerHTML
            .replace(/{{prix}}/g, total.toString());
        clone.firstElementChild.innerHTML = newtotal;
        document.getElementById("divtotal").appendChild(clone);
    }
}

function checkAndValidateForm() {
    // check du formulaire
    let formulaire = document.getElementById("formulaire");
    let confirmForm = document.getElementById("confirm-commande");
    // comme le bouton "valider" est sorti du form, on ajoute un listener dessus
    confirmForm.addEventListener("click", () => {
        let isModified = checkIsModify(); //On vérifie si une modification est en cours
        if (!isModified) {
            if (formulaire.checkValidity()) {
                //si le form est rempli correctement, on passe à la suite
                formulaire.submit();
            } else {
                // s'il manque ou s'il y a des infos erronées
                let invalidFields = [];
                let req = formulaire.querySelectorAll("input:required");
                // on stocke dans un tableau les noms des champs non ok et on les met en surbrillance
                for (let champ of req) {
                    if (!champ.validity.valid) {
                        champ.classList.add("invalid");
                        invalidFields.push(champ.id);
                    }
                }
                // alert("Attention ! Les champs suivants ne sont pas correctement remplis : " + invalidFields.join(", "));
            }
        } else {
            alert('Modification non enregistré !');
        }
    });
}

function checkFields() {
    let fields = document.querySelectorAll("input:required");
    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener("input", () => {
            if (!fields[i].validity.valid) {
                // si un champ est invalide, on change sa classe et on ne teste/valide pas le form
                fields[i].classList.add("invalid");
                return false
            } else {
                fields[i].classList.remove("invalid");
            }
        })
    }
    return true
}

//Quand on clique sur le boutton modifier
function modifSejour(id) {
    panierLocal.getByID(id).modif = true;
    creationtableau();
}

//Quand on annule une modification
function cancelModif(id) {
    panier.setFromLocalStorage(); //On récupère les anciennes valeurs
    panierLocal.modifi(id, panier.getByID(id)); //on modifi le panier local
    creationtableau(); //on affiche
}

//Validation des modifications
function validerModif(id) {
    let sejour = panierLocal.getByID(id); //On récupère les valeurs modifié
    sejour.modif = false; //on définit qu'on est plus en modifications
    panierLocal.modifi(id, sejour); //on modifi le panier local ainsi que le localStorage
    creationtableau(); //on affiche
}

//Vérification des dates du voyage en fonction de son ID
function verificationDateModif(id) {
    let datedebut = new Date(document.getElementById('dateDebutModif' + id).value);
    let demain = new Date();
    demain.setTime(new Date().getTime() + 24 * 3600 * 1000);

    document.getElementById('dateDebutModif' + id).min = demain.toISOString().substring(0, 10); //on définit la date minimum

    if (datedebut < Date.now()) { //si la date n'est pas bonne on la modifie
        document.getElementById('dateDebutModif' + id).value = demain.toISOString().substring(0, 10);

        //et on modifie la date de fin
        let lendemain = new Date();
        lendemain.setTime(demain.getTime() + 24 * 3600 * 1000);
        document.getElementById('dateFinModif' + id).value = lendemain.toISOString().substring(0, 10);

        datedebut = new Date(document.getElementById('dateDebutModif' + id).value);

    }
    //On calcul la date de fin minimum (le lendemain du départ)
    let lendemain = new Date();
    lendemain.setTime(datedebut.getTime() + 24 * 3600 * 1000);
    document.getElementById('dateFinModif' + id).min = lendemain.toISOString().substring(0, 10);

    let datefin = new Date(document.getElementById('dateFinModif' + id).value);

    //Si la date de fin est avant la date de début (normalement bloqué par les minimums mais on sait jamais
    if (dateDiff(datedebut, datefin).day <= 0) {
        document.getElementById('dateFinModif' + id).value = lendemain.toISOString().substring(0, 10);
    }
}

//Pour tout changement de valeurs
function changeValue(id) {
    verificationDateModif(id); //On vérifie les dates
    //et on modifie le panierLocal avec les nouvelles valeurs (sans modifier le localStorage)
    let sejour = panierLocal.getByID(id);
    sejour.datedebut = new Date(document.getElementById("dateDebutModif" + id).value);
    sejour.datefin = new Date(document.getElementById("dateFinModif" + id).value);
    sejour.nbAdulte = Number(document.getElementById("nbAdultesModif" + id).value);
    sejour.nbEnfant = Number(document.getElementById("nbEnfantsModif" + id).value);
    if (sejour.petitDejAvailable)
        sejour.petitDej = document.getElementById("petitDejModif" + id).checked;
    creationtableau(); //On affiche
}

//Remplissage des infos utilisateurs si on est connecté
function remplirInfos() {
    if (connectedUser) {
        document.getElementById("lastName").value = connectedUser.nom;
        document.getElementById("firstName").value = connectedUser.prenom;
        document.getElementById("adresse").value = connectedUser.adresse;
        document.getElementById("code-postal").value = connectedUser.codePostal;
        document.getElementById("ville").value = connectedUser.ville;
        document.getElementById("tel").value = connectedUser.tel;
        document.getElementById("email").value = connectedUser.email;
    }
}

//Vérification d'une modification en cour
function checkIsModify() {
    let isModified = false;
    panierLocal.get().forEach(function (dest) {
        if (dest.modif)
            if (dest != panier.get()[dest.id]) {
                if (!isModified) {
                    isModified = true;
                }
            }
    });
    return isModified;
}

//Affichage de l'alerte en cas de modification en cours
//appel par le body 'onbeforeUnload'
function alerteChangementPage() {
    modif = checkIsModify();
    if (modif == true) {
        if (confirm('Des modifications ont été apportées, voulez-vous quitter ?')) {
            return true;
        } else {
            return false;
        }
    }
}