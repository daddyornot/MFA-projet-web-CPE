
window.onload = () => {
    changeFilter();
    document.getElementById("filtres").addEventListener('input', changeFilter);
    document.getElementById("filtres").addEventListener('reset', resetForm);
}

let voyage = [];

for (let dest of listDestination) {
    voyage.push(new Voyage(dest));
}

function changeFilter() {
    // console.log('ChangeFilter');
    let filter = voyage;
    if (document.getElementById("animaux-form").checked)
        filter = filter.filter(function (dest) {
            return dest._animaux;
        });
    let prixmax = document.getElementById("prix-max").value;
    let prixmin = document.getElementById("prix-mini").value;

    filter = filter.filter(function (dest) {
        return prixmin <= dest._prixnuit && dest._prixnuit <= prixmax
    })

    if (filter.length === 0 ){
        document.getElementById("liste-destinations").innerHTML = "Désolé aucun voyage correspond à vos critère\n" +
            " merci de modifier vos critères pour plus de résultats"
    }
    else
    {
        let template = document.querySelector("#listeDestinations");
        document.getElementById("liste-destinations").innerHTML = "";
        for (const d of filter) {
            let clone = document.importNode(template.content, true);
            let animaux = "display: ";

            if (d.animaux)
                animaux += "flex";
            else
                animaux += "none";

            newDestination = clone.firstElementChild.innerHTML
                .replace(/{{destination}}/g, d.destination)
                .replace(/{{temperature}}/g, d.temperature)
                .replace(/{{prixNuit}}/g, d.prixNuit)
                .replace(/{{imgDest}}/g, d.images[0])
                .replace(/{{url}}/g, d.value)
                .replace(/{{animaux}}/g, animaux);

            clone.firstElementChild.innerHTML = newDestination;

            document.getElementById("liste-destinations").appendChild(clone);

        }
    }
}

function resetForm(){
    console.log("reset");
    document.getElementById("prix-mini").value = document.getElementById("prix-mini").min;
    document.getElementById("prix-max").value = document.getElementById("prix-max").max;

    changeFilter();
}