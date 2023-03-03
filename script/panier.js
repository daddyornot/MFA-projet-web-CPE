// peut remplacer window.onload
// document.addEventListener("DOMContentLoaded", function () {});

var panier = new Panier();
window.onload = () => {
    panier = new Panier();
    if (!panier.get()){ //Si le local storage n'existe pas
        document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
        document.getElementById("divtotal").style.display = 'none';
        document.getElementsByClassName("info-commande")[0].style.display = 'none';
        document.getElementsByTagName("button")[0].style.display = 'none';
    }
    else {
        if (panier.get().length == 0){ //si le local storage est vide
            document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
            document.getElementById("divtotal").style.display = 'none';
            document.getElementsByClassName("info-commande")[0].style.display = 'none';
            document.getElementsByTagName("button")[0].style.display = 'none';
        }
        else
        creationtableau();
    }
    // on ne test le form que si les champs sont respectés
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
        .replace(/{{prix}}/g, total);
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
            alert("A priori, tous les champs requis ne sont pas correctement remplis !");
        }
    });
}

function checkFields() {
    let fields = document.querySelectorAll("input:required");
    // console.log(fields);

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener("input", () => {
            console.log(fields[i]);

            if (!fields[i].validity.valid) {
                // si un champ est invalide, on change sa classe et on ne valide pas le form
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
