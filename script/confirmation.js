
let panier = new Panier();

let template = document.querySelector("#resumeVoyage");
for (let e of panier.get()) {
    const voyage = new Reservation(e._selection);
    voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);

    let clone = document.importNode(template.content, true);

    // newResume = clone.firstElementChild.innerHTML
    //     .replace(/{{destination}}/g, voyage.destination)
    //     .replace(/{{nbAdultes}}/g, voyage.nbAdulte)
    //     .replace(/{{nbEnfants}}/g, voyage.nbEnfant)
    //     .replace(/{{prixTotal}}/g, voyage.total)
    //     .replace(/{{dateDebut}}/g, voyage.datedebut)
    //     .replace(/{{dateFin}}/g, voyage.datefin)
    //     .replace(/{{imgDest}}/g, voyage.images[0]);

    // clone.firstElementChild.innerHTML = newResume;
    clone.querySelector(".img-resume").src = voyage.images[0];
    clone.querySelector("p:nth-of-type(1)").textContent = `Pour rappel, vous partez à ${voyage.destination}`;
    clone.querySelector("p:nth-of-type(2)").textContent = `Du ${toFormattedDate(voyage.datedebut)} au ${toFormattedDate(voyage.datefin)}, soit ${voyage.nbJour} jours (ou ${voyage.nbJour-1} nuitées si vous préférez)`;
    clone.querySelector("p:nth-of-type(3)").textContent = `Vous serez ${voyage.nbAdulte} adulte(s) et ${voyage.nbEnfant} enfant(s)`;
    clone.querySelector("p:nth-of-type(4)").textContent = `Est-ce que vous avez pris le pti dej' ? => ${voyage.petitDej}`;
    clone.querySelector("p:nth-of-type(5)").textContent = `Et tout ça pour un total de ${voyage.total}€ `;

    document.getElementById("resume-voyage").appendChild(clone);
}