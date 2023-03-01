
let panier = new Panier();

let template = document.querySelector("#resumeVoyage");
for (let voyage of panier.get()) {

    let clone = document.importNode(template.content, true);

    //le template est complété ainsi car je ne sais pas pourquoi mais le replace ne fonctionne pas
    clone.querySelector(".img-resume").src = voyage.images[0];
    clone.querySelector("p:nth-of-type(1)").textContent = `Pour rappel, vous partez à ${voyage.destination}`;
    clone.querySelector("p:nth-of-type(2)").textContent = `Du ${toFormattedDate(voyage.datedebut)} au ${toFormattedDate(voyage.datefin)}, soit ${voyage.nbJour} jours`;
    clone.querySelector("p:nth-of-type(3)").textContent = `Vous serez ${voyage.nbAdulte} adulte(s) et ${voyage.nbEnfant} enfant(s)`;
    clone.querySelector("p:nth-of-type(4)").textContent = `Est-ce que vous avez pris le pti dej' ? => ${voyage.petitDej}`;
    clone.querySelector("p:nth-of-type(5)").textContent = `Et tout ça pour un total de ${voyage.total}€ `;

    document.getElementById("resume-voyage").appendChild(clone);
}

function onUpdate(){
    for (v of panier.get()){
        console.log("à implementer avec la météo : " + v.temperature);
    }
}
