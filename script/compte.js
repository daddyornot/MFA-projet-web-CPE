
function afficherInfosUser() {
    // console.log("compte.js : "+ connectedUser.username);
    if (connectedUser) {
        document.getElementById("nom").innerHTML = connectedUser.nom;
        document.getElementById("prenom").innerHTML = connectedUser.prenom;
        document.getElementById("adresse").innerHTML = connectedUser.adresse;
        document.getElementById("code-postal").innerHTML = connectedUser.codePostal;
        document.getElementById("ville").innerHTML = connectedUser.ville;
        document.getElementById("pays").innerHTML = connectedUser.pays;
        document.getElementById("tel").innerHTML = connectedUser.tel;
    }
    else {
        window.location.href = "index.html"
    }
}

function afficherHistorique() {
    document.getElementById("historique-voyage").innerHTML = "";
    for (let voyage of historique) {
        let clone = document.importNode(template.content, true);

        let imgSejour = clone.firstElementChild.innerHTML
            .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
            .replace(/{{imgDest}}/g, voyage.images[0])
            .replace(/{{temperature}}/g, voyage.temperature);

        let detailSejour = clone.lastElementChild.innerHTML
            .replace(/{{destination}}/g, voyage.ville)
            .replace(/{{dateDebut}}/g, toFormattedDate(voyage.datedebut))
            .replace(/{{dateFin}}/g, toFormattedDate(voyage.datefin))
            .replace(/{{nbJour}}/g, voyage.nbJour > 1 ? voyage.nbJour + " jours" : voyage.nbJour + " jour")
            // expr ternaire :  condition testée ?  valeur si true      :  valeur si false
            .replace(/{{petitDej}}/g, (voyage.petitDej ? "Avec le Pti dej' !" : "Sans pti dej'"))
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte > 1 ? voyage.nbAdulte + " adultes" : voyage.nbAdulte + " adulte")
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant > 1 ? voyage.nbEnfant + " enfants" : voyage.nbEnfant === 1 ? voyage.nbEnfant + " enfant" : "sans enfants en plus !")
            .replace(/{{prixVoyage}}/g, voyage.total)

        clone.firstElementChild.innerHTML = imgSejour;
        clone.lastElementChild.innerHTML = detailSejour;

        document.getElementById("resume-voyage").appendChild(clone);
    }
}

window.onload = () => {


    // on récupère l'historique du user connecté
    afficherHistorique();

}


