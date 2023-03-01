let panier = new Panier();

let template = document.querySelector("#resumeVoyage");
for (let e of panier.get()) {
    const voyage = new Reservation(e._selection);
    voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);

    console.log(document);
    let clone = document.importNode(template.content, true);

    newResume = clone.firstElementChild.innerHTML
        .replace(/{{destination}}/g, voyage.destination)
        .replace(/{{temperature}}/g, voyage.prixPetitDej)
        .replace(/{{prixTotal}}/g, voyage.total)
        .replace(/{{dateDebut}}/g, voyage.datedebut)
        .replace(/{{dateFin}}/g, voyage.datefin)
        .replace(/{{imgDest}}/g, voyage.images[0]);

    clone.firstElementChild.innerHTML = newResume;
    document.getElementById("resume-voyage").appendChild(clone);
}