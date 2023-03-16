
function afficherInfosUser() {
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
    document.getElementById("historique").innerHTML = "";
    let template = document.querySelector("#historique-voyage");
    for (let voyage of connectedUser.historique) {
        let clone = document.importNode(template.content, true);

        let imgSejour = clone.firstElementChild.innerHTML
            .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
            .replace(/{{imgDest}}/g, voyage.images[0])
            .replace(/{{alt}}/g, "Photo de " + voyage.ville)
            .replace(/{{temperature}}/g, voyage.temperature);

        let detailSejour = clone.lastElementChild.innerHTML
            .replace(/{{destination}}/g, voyage.ville)
            .replace(/{{dateDebut}}/g, toFormattedDate(new Date(voyage.datedebut)))
            .replace(/{{dateFin}}/g, toFormattedDate(new Date(voyage.datefin)))
                            // expr ternaire :  condition testée ?  valeur si true      :  valeur si false
            .replace(/{{petitDej}}/g, (voyage.petitDej ? "Avec le Pti dej' !" : "Sans pti dej'"))
            .replace(/{{nbAdultes}}/g, voyage.nbAdulte > 1 ? voyage.nbAdulte + " adultes" : voyage.nbAdulte + " adulte")
            .replace(/{{nbEnfants}}/g, voyage.nbEnfant > 1 ? voyage.nbEnfant + " enfants" : voyage.nbEnfant === 1 ? voyage.nbEnfant + " enfant" : "sans enfants ! 😮")
            .replace(/{{prixVoyage}}/g, voyage.total)

        clone.firstElementChild.innerHTML = imgSejour;
        clone.lastElementChild.innerHTML = detailSejour;

        document.getElementById("historique").appendChild(clone);
    }
}

window.onload = () => {

}


