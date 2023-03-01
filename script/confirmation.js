
let panier = new Panier();
let nbJourRestants = 9999999;
let prixTotal = 0;

let template = document.querySelector("#resumeVoyage");
for (let voyage of panier.get()) {
    let clone = document.importNode(template.content, true);
    //le template est complété ainsi car je ne sais pas pourquoi mais le replace ne fonctionne pas
    clone.querySelector(".img-resume").src = voyage.images[0];
    clone.querySelector("p:nth-of-type(1)").textContent = `Vous partez à ${voyage.ville}`;
    clone.querySelector("p:nth-of-type(2)").textContent = `Du ${toFormattedDate(voyage.datedebut)} au ${toFormattedDate(voyage.datefin)}, soit ${voyage.nbJour} jours`;
    clone.querySelector("p:nth-of-type(3)").textContent = `Vous serez ${voyage.nbAdulte} adulte(s) et ${voyage.nbEnfant} enfant(s)`;
    if (voyage.petitDej) {
        clone.querySelector("p:nth-of-type(4)").textContent = "Avec le pti dej' !";
    }
    else {
        clone.querySelector("p:nth-of-type(4)").textContent = "Sans pti dej'";
    }
    clone.querySelector("p:nth-of-type(5)").textContent = `Ce voyage coute donc ${voyage.total}€`;
    document.getElementById("resume-voyage").appendChild(clone);
<<<<<<< HEAD
}

function onUpdate(){
    for (v of panier.get()){
        console.log("à implementer avec la météo : " + v.temperature);
    }
}
=======
>>>>>>> 6a5b270 (fix rebase)
    if (dateDiff(new Date(), voyage.datedebut).day < nbJourRestants) {
        nbJourRestants = dateDiff(new Date(), voyage.datedebut).day;
    }
    prixTotal += voyage.total;
}


document.getElementById("nb-jour-restants").innerHTML = nbJourRestants;
document.getElementById("prix-total").innerHTML = " " + prixTotal + " €";

<<<<<<< HEAD
window.onunload = () => {
    window.localStorage.clear();
}
=======
function onUpdate(){
    for (v of panier.get()){
        console.log("à implementer avec la météo : " + v.temperature);
    }
}
>>>>>>> 6a5b270 (fix rebase)
