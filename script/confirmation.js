//Définition des variables
let panier;
let template = document.querySelector("#resumeVoyage");

window.onload = () => {
    getVoyages(); //on récupère les voyages
}

// on vide le panier une fois qu'on part de la page de confirmation
window.onunload = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
}

//une fois qu'on a les données
function start(){
    //On récupère le panier
    panier = new ListeReservations();
    panier.setFromLocalStorage();
    if(panier.get().length == 0) //si il est vide on redirige vers l'index
        window.location = "./index.html"
    genererResume(); //on affiche
}

function genererResume() {
    let nbJourRestants = 9999999;
    let prixTotal = 0;
    // on clear le template pour ne l'avoir qu'une seule fois
    document.getElementById("resume-voyage").innerHTML = "";
    for (let voyage of panier.get()) {
        let clone = document.importNode(template.content, true);

        let imgSejour = clone.firstElementChild.innerHTML
            .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
            .replace(/{{imgDest}}/g, voyage.images[0])
            .replace(/{{alt}}/g, "Photo de " + voyage.destination)
            .replace(/{{temperature}}/g, voyage.temperature);

        let detailSejour = clone.lastElementChild.innerHTML
            .replace(/{{destination}}/g, voyage.ville)
            .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
            .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
            .replace(/{{nbJour}}/g, voyage.nbJour>1 ? voyage.nbJour + " jours" : voyage.nbJour + " jour")
            .replace(/{{petitDej}}/g, (voyage.petitDej ? "Avec le Pti dej' !" : "Sans pti dej'"))
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte>1 ? voyage.nbAdulte + " adultes" : voyage.nbAdulte + " adulte")
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant>1 ? voyage.nbEnfant + " enfants" : voyage.nbEnfant===1 ? voyage.nbEnfant + " enfant" : "sans enfants en plus !")
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
        document.getElementById("nb-jour-restants").innerHTML = "Wow, vous partez demain ?! Dépêchez vous de faire vos valises !";
    }
    document.getElementById("prix-total").innerHTML = " " + prixTotal + " €";
}

//Quand on reçoit les températures
function onUpdate(){
    for (let dest of panier.get())
        dest.update();//On met a jour la température
    genererResume();
}


