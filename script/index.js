
window.onload = () => {
    ecritureCritere();

    changeFilter();
    document.getElementById("filtres").addEventListener('input', changeFilter);
    document.getElementById("searchbar").addEventListener('input', changeFilter);
}

let voyage = [];

for (let dest of listDestination) {
    voyage.push(new Voyage(dest));
}

function onUpdate(){
    changeFilter();
}
function changeFilter() {
    // console.log('ChangeFilter');
    let filter = voyage;
    let search = document.getElementById("searchbar").value;
    if(search !== ""){
        filter = filter.filter(function (dest) {
            return dest.destination.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                dest.ville.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        })
    }

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
    lectureCritere();
    verificationDate();
}

function resetForm(){
    console.log("reset");
    document.getElementById("prix-mini").value = document.getElementById("prix-mini").min;
    document.getElementById("prix-max").value = document.getElementById("prix-max").max;
    document.getElementById("nb-adulte").value = 1;
    document.getElementById("nb-enfant").value = 0;
    document.getElementById("animaux-form").checked = false;
    document.getElementById("petitdej").checked = false;
    document.getElementById('searchbar').value = "";
    sessionStorage.clear();
    ecritureCritere();
    verificationDate();
    changeFilter();
}

// Permet d'afficher/cacher les filtres et changer le texte du bouton
const toggleButton = document.getElementById('toggle-filtres');
const formFiltres = document.getElementById('filtres');

toggleButton.addEventListener('click', () => {
    formFiltres.classList.toggle("active-filter");
    console.log(formFiltres.className);
    if (formFiltres.className === "hidden") {
        toggleButton.innerText = "Afficher les filtres";
    }
    else {
        toggleButton.innerText = "Cacher les filtres";
    }
})