
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
        // $("#liste-destinations").load('TemplateGrid.html');
    let template = document.querySelector("#listeDestinations");
    if (document.getElementById("animaux-form").checked)
        voyage = voyage.filter(function (dest) {
            return dest._animaux;
        });
    let prixmax = document.getElementById("prix-max").value;
    let prixmin = document.getElementById("prix-mini").value;
    voyage = voyage.filter(function (dest) {
        return prixmin <= dest._prixnuit && dest._prixnuit <= prixmax
    })

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