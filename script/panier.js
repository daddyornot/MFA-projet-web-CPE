
window.onload = () => {
    console.log("onLoad");
    panier = new Panier();
    console.log(panier.get());

    if (!panier.get()){
        document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
    }
    else {
        if (panier.get().length == 0)
            document.getElementById("contenu-panier").innerHTML = "Aucun Voyage ajouté au panier";
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

    for (e of panier.get()) {
        const voyage = new Reservation(e._selection);
        voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);
        if(voyage.petitDej)
            var dej = "Pti dej' inclus";
        else
            var dej = "Pas de Pti dej'";

        let clone = document.importNode(template.content, true);

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
}

function toFormattedDate(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}