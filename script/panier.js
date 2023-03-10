// peut remplacer window.onload
// document.addEventListener("DOMContentLoaded", function () {});

var panier;
var panierLocal;

window.onload = () => {
    getVoyages();
    // on ne test et valide le form que si les champs sont respectés
    // TODO : et si un user est connecté on préremplit les champs
    if (checkFields())
        checkAndValidateForm();
}

function start(){

    panier = new Panier();
    panierLocal = new Panier();
    creationtableau();
}

function onUpdate(){
    creationtableau();
}

function remove(id){
    panier.remove(id);
    panierLocal.remove(id);
    // panier = new Panier();
    // panierLocal = new Panier();
    // location.reload();
    creationtableau();
}

function desactivationDesChamps(toDesactivate){
    if (toDesactivate){
        document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
        document.getElementById("divtotal").style.display = 'none';
        document.getElementsByClassName("info-commande")[0].style.display = 'none';
        document.getElementsByClassName("infos")[0].style.display = 'none';
        document.getElementsByTagName("button")[0].style.display = 'none';
    } else {
        document.getElementById("divtotal").style.display = '';
        document.getElementsByClassName("info-commande")[0].style.display = '';
        document.getElementsByClassName("infos")[0].style.display = '';
        document.getElementsByTagName("button")[0].style.display = '';
    }
}

function creationtableau(){
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

            if (voyage.modif) {
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
                    .replace(/{{petitdej}}/g, dej)
                    .replace(/{{prix}}/g, voyage.total)
                    .replace(/{{idVoyage}}/g, voyage.id);
                clone.firstElementChild.innerHTML = newDestination;
                let selectAdulte = clone.getElementById("nbAdultesModif" + voyage.id);
                [...selectAdulte].forEach(element => {
                    if (element.value == voyage.nbAdulte){
                        element.setAttribute("selected", "");
                    }
                });
                let selectEnfant = clone.getElementById("nbEnfantsModif" + voyage.id);
                [...selectEnfant].forEach(element => {
                    if (element.value == voyage.nbEnfant){
                        element.setAttribute("selected", "");
                    }
                });
                if (!voyage.petitDejAvailable)
                    clone.getElementById("caseDej" + voyage.id).innerHTML = "Pti dej' non dispo";
            } else {
                template = document.querySelector("#listeDestinations");
                if (voyage.petitDej)
                    var dej = "Pti dej' inclus";
                else
                    var dej = "Pas de Pti dej'";
                if(!voyage.petitDejAvailable)
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
                    .replace(/{{petitdej}}/g, dej)
                    .replace(/{{prix}}/g, voyage.total)
                    .replace(/{{idVoyage}}/g, voyage.id);
                clone.firstElementChild.innerHTML = newDestination;
            }

            document.getElementById("contenu-panier").appendChild(clone);
        }

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
        let isModified = false;
        panierLocal.get().forEach(function (dest) {
            if(dest.modif)
                if(dest != panier.get()[dest.id]){
                    if(!isModified) {
                        alert('Modification non enregistré !');
                        isModified = true;
                    }
                }
        });
        if (!isModified) {
            if (formulaire.checkValidity()) {
                //si le form est rempli correctement, on passe a la suite
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
        }
    });
}

function checkFields() {
    let fields = document.querySelectorAll("input:required");
    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener("input", () => {
            if (!fields[i].validity.valid) {
                // si un champ est invalide, on change sa classe et on ne test/valide pas le form
                fields[i].classList.add("invalid");
                return false
            }
            else {
                fields[i].classList.remove("invalid");
            }
        })
    }
    return true
}

function modifSejour(id) {
    // console.log(panier.get()[id]);
    panierLocal.get()[id].modif = true;
    creationtableau();
}

function cancelModif(id) {
    panier = new Panier();
    panierLocal.get()[id].modif = false;
    panierLocal.modifi(id, panier.get()[id]);
    creationtableau();
}

function validerModif(id) {
    panier = new Panier();
    let sejour = panierLocal.get()[id];
    panier.modifi(id, sejour);
    panier = new Panier();
    panierLocal = new Panier();
    creationtableau();
}

function verificationDateModif(id){
    let datedebut = new Date(document.getElementById('dateDebutModif' + id).value);
    let demain = new Date();
    demain.setTime(new Date().getTime() + 24 * 3600 * 1000);

    document.getElementById('dateDebutModif'+ id ).min = demain.toISOString().substring(0,10);

    if( datedebut < Date.now()){
        // alert("La date de début n'est pas bonne");
        document.getElementById('dateDebutModif' + id).value = demain.toISOString().substring(0,10);

        let lendemain = new Date();
        lendemain.setTime(demain.getTime() + 24 * 3600 * 1000);
        document.getElementById('dateFinModif' + id).value = lendemain.toISOString().substring(0,10);

        datedebut = new Date(document.getElementById('dateDebutModif' + id).value);

    }
    let lendemain = new Date();
    lendemain.setTime(datedebut.getTime() + 24 * 3600 * 1000);
    document.getElementById('dateFinModif'+ id).min = lendemain.toISOString().substring(0,10);

    let datefin = new Date(document.getElementById('dateFinModif' + id).value);

    if(dateDiff(datedebut, datefin).day <= 0){
        document.getElementById('dateFinModif' + id).value = lendemain.toISOString().substring(0,10);
    }
}

function changeValue(id){
    verificationDateModif(id);
    let sejour = panierLocal.get()[id]
    sejour.datedebut = new Date(document.getElementById("dateDebutModif" + id).value);
    sejour.datefin = new Date(document.getElementById("dateFinModif" + id).value);
    sejour.nbAdulte = Number(document.getElementById("nbAdultesModif" + id).value);
    sejour.nbEnfant = Number(document.getElementById("nbEnfantsModif" + id).value);
    if (sejour.petitDejAvailable)
        sejour.petitDej = document.getElementById("petitDejModif" + id).checked;
    creationtableau();
}