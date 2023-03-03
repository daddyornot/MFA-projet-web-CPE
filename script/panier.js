// peut remplacer window.onload
// document.addEventListener("DOMContentLoaded", function () {});

var panier = new Panier();
window.onload = () => {
    panier = new Panier();
    // Si le local storage n'existe pas ou s'il est vide, on n'affiche pas le panier
    if (!panier.get() || panier.get().length === 0) {
        document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
        document.getElementById("divtotal").style.display = 'none';
        document.getElementsByClassName("info-commande")[0].style.display = 'none';
        document.getElementsByTagName("button")[0].style.display = 'none';
    // sinon on créé un panier
    } else creationtableau();
    // on ne test et valide le form que si les champs sont respectés
    if (checkFields())
    checkAndValidateForm();
}

function onUpdate(){
    creationtableau();
}

function remove(id){
    panier.remove(id);
    location.reload();
}

function creationtableau(){
    let template = document.querySelector("#listeDestinations");
    let total = 0;
    document.getElementById("divtotal").innerHTML = "";
    document.getElementById("contenu-panier").innerHTML = "";
    for (let voyage of panier.get()) {

        if (voyage.modif) {
            template = document.querySelector("#modifDestination");
        }
        else {
            template = document.querySelector("#listeDestinations");
        }

        if(voyage.petitDej)
            var dej = "Pti dej' inclus";
        else
            var dej = "Pas de Pti dej'";

        let clone = document.importNode(template.content, true);
        total += voyage.total;
        newDestination = clone.firstElementChild.innerHTML
            .replace(/{{temperature}}/g, voyage.temperature)
            .replace(/{{destination}}/g, voyage.destination)
            .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
            .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte>1 ? voyage.nbAdulte + " adultes" : voyage.nbAdulte + " adulte")
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant>1 ? voyage.nbEnfant + " enfants" : voyage.nbEnfant===1 ? voyage.nbEnfant + " enfant" : "Pas d'enfants, youpi !")
            .replace(/{{imgDest}}/g, voyage.images[0])
            .replace(/{{petitdej}}/g, dej)
            .replace(/{{prix}}/g, voyage.total)
            .replace(/{{suppr}}/g, voyage.id);
        clone.firstElementChild.innerHTML = newDestination;
        document.getElementById("contenu-panier").appendChild(clone);
    }

    let templatetotal = document.querySelector("#total");
    let clone = document.importNode(templatetotal.content, true);
    newtotal = clone.firstElementChild.innerHTML
        .replace(/{{prix}}/g, total.toString());
    clone.firstElementChild.innerHTML = newtotal;
    document.getElementById("divtotal").appendChild(clone);
}

function checkAndValidateForm() {
    // check du formulaire
    let formulaire = document.getElementById("formulaire");
    let confirmForm = document.getElementById("confirm-commande");
    // comme le bouton "valider" est sorti du form, on ajoute un listener dessus
    confirmForm.addEventListener("click", () => {
        if (formulaire.checkValidity()) {
            //si le form est rempli correctement, on passe a la suite
            formulaire.submit();
        } else {
            // s'il manque ou s'il y a des infos erronées
            let invalidFields = [] ;
            let req = formulaire.querySelectorAll("input:required");
            // on stocke dans un tableau les noms des champs non ok et on les met en surbrillance
            for (let champ of req)  {
                if (!champ.validity.valid) {
                    champ.classList.add("invalid");
                    invalidFields.push(champ.id);
                }
            }
            alert("Attention ! Les champs suivants ne sont pas correctement remplis : " + invalidFields.join(", "));
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

function modif(id) {
    // console.log(panier.get()[id]);
    panier.get()[id].modif = true;
    creationtableau();
}

function cancelModif(id) {
    panier.get()[id].modif = false;
    creationtableau();
}