
let panier = new Panier();
let template = document.querySelector("#resumeVoyage");

function genererResume() {

    let nbJourRestants = 9999999;
    let prixTotal = 0;
    // on clear le template pour ne l'avoir qu'une seule fois
    document.getElementById("resume-voyage").innerHTML = "";
    for (let voyage of panier.get()) {
        let clone = document.importNode(template.content, true);

        let imgSejour = clone.firstElementChild.innerHTML
            .replace(/{{imgDest}}/g, voyage.images[0])
            .replace(/{{temperature}}/g, voyage.temperature);

        let detailSejour = clone.lastElementChild.innerHTML
            .replace(/{{destination}}/g, voyage.ville)
            .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
            .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
            .replace(/{{nbJour}}/g, voyage.nbJour)
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte)
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant)
                            // exp ternaire :   condition testée ?  valeur si true      :  valeur si false
            .replace(/{{petitDej}}/g, (voyage.petitDej ? "Avec le Pti dej' !" : "Sans pti dej'"))
            .replace(/{{prixVoyage}}/g, voyage.total)

        clone.firstElementChild.innerHTML = imgSejour;
        clone.lastElementChild.innerHTML = detailSejour;

        document.getElementById("resume-voyage").appendChild(clone);

        if (dateDiff(new Date(), voyage.datedebut).day < nbJourRestants) {
            nbJourRestants = dateDiff(new Date(), voyage.datedebut).day;
        }
        prixTotal += voyage.total;
    }
    // On change l'affichage selon le nb de jour avant le départ
    if (nbJourRestants > 0) {
        document.getElementById("nb-jour-restants").innerHTML = "Félicitations, plus que " + nbJourRestants + " jours avant de partir en voyage !";
    }
    else {
        document.getElementById("nb-jour-restants").innerHTML = "Wow, vous partez aujourd'hui ?! Dépêchez vous de faire vos valises !";
    }
    document.getElementById("prix-total").innerHTML = " " + prixTotal + " €";
}



// on vide le panier une fois qu'on est arrivé sur la page de confirmation
window.onunload = () => {
    // window.localStorage.clear();
}

function onUpdate(){
    genererResume();
}

genererResume();
