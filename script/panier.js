
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
}

function remove(id){
    panier.remove(id);
    location.reload();
}

function creationtableau(){
    let template = document.querySelector("#listeDestinations");
    let total = 0;
    for (e of panier.get()) {
        const voyage = new Reservation(e._selection);
        voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);
        if(voyage.petitDej)
            var dej = "Pti dej' inclus";
        else
            var dej = "Pas de Pti dej'";

        let clone = document.importNode(template.content, true);
        total += voyage.total;
        newDestination = clone.firstElementChild.innerHTML
            .replace(/{{destination}}/g, voyage.destination)
            .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
            .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte)
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant)
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

function toFormattedDate(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}