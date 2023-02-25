
window.onload = () => {
    changeFilter();
    document.getElementById("filtres").addEventListener('change', changeFilter);

}

function changeFilter() {
    console.log('ChangeFilter');
    let voyage = [];

    for (let dest of listDestination) {
        voyage.push(new Voyage(dest));
    }
    let template = document.querySelector("#listeDestinations");

    voyage.filter(value => value._prixnuit < document.getElementById("prix-mini").value)
    for (const d of voyage) {
        let clone = document.importNode(template.content, true);
        let animaux = "display: ";

        if (d.animaux)
            animaux += "flex";
        else
            animaux += "none";

        newDestination = clone.firstElementChild.innerHTML
            .replace(/{{destination}}/g, d.destination)
            .replace(/{{temperature}}/g, d.prixPetitDej)
            .replace(/{{prixNuit}}/g, d.prixNuit)
            .replace(/{{imgDest}}/g, d.images[0])
            .replace(/{{url}}/g, d.value)
            .replace(/{{animaux}}/g, animaux);

        clone.firstElementChild.innerHTML = newDestination;

        document.getElementById("liste-destinations").appendChild(clone);
    }
}