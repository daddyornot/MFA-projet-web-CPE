
window.onload = () => {
    ecritureCritere();

    document.getElementById("filtres").addEventListener('input', changeFilter);
    document.getElementById("searchbar").addEventListener('input', changeFilter);
    getVoyages();

}

//let voyagesLocal = [];

function start() { //on créé la liste de voyages et on génère le tableau une fois qu'on a les donnees
    for (let dest of listDestination) {
        voyagesLocal.push(new Voyage(dest));
    }
    randomizeBackground();
    changeFilter();
}

function onUpdate(){
    changeFilter();
}

function changeFilter() {
    let filter = voyagesLocal;
    let search = document.getElementById("searchbar").value;
    if(search !== ""){
        filter = filter.filter(function (dest) {
            return dest.destination.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                dest.ville.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        })
    }
    if($("#petitdej")[0].checked){
        filter = filter.filter(function (dest) {
            return dest.petitDejAvailable
        })
    }
    if (document.getElementById("animaux-form").checked)
        filter = filter.filter(function (dest) {
            return dest.animaux;
        });
    let prixmax = document.getElementById("prix-max").value;
    let prixmin = document.getElementById("prix-mini").value;

    filter = filter.filter(function (dest) {
        return prixmin <= dest._prixnuit && dest._prixnuit <= prixmax
    })

    if (filter.length === 0 ){
        document.getElementById("liste-destinations").innerHTML = "";
        let aucunResultat = document.getElementById("no-destination");
        aucunResultat.style.display = "block";
        if (search) {
            aucunResultat.innerHTML = "Désolé, nous ne trouvons aucun voyage contenant '" + search + "' 😭"
        }
        else {
            aucunResultat.innerHTML = "Désolé, nous ne trouvons aucun voyage qui correspond à vos critères 😭"
        }
    }
    else
    {
        document.getElementById("no-destination").style.display = "none";
        let template = document.querySelector("#listeDestinations");
        document.getElementById("liste-destinations").innerHTML = "";
        for (const d of filter) {
            let clone = document.importNode(template.content, true);

            let newDestination = clone.firstElementChild.innerHTML
                .replace(/{{destination}}/g, d.destination)
                .replace(/{{temperature}}/g, d.temperature)
                .replace(/{{prixNuit}}/g, d.prixNuit)
                .replace(/{{src}}/g, "src") // permet d'éviter que le template essaye de charger l'image
                .replace(/{{imgDest}}/g, d.images[0])
                .replace(/{{url}}/g, d.value);
                // .replace(/{{animaux}}/g, animaux);

            clone.firstElementChild.innerHTML = newDestination;
            if (!d.petitDejAvailable)
                clone.getElementById("ptidej-destination").style.display = "none";
            if (!d.animaux)
                clone.getElementById("animaux-destination").style.display = "none";

            document.getElementById("liste-destinations").appendChild(clone);
        }
    }
    lectureCritere();
    verificationDate();
}

function resetForm(){
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
    formFiltres.classList.toggle("box");
    formFiltres.classList.toggle("hidden");
    if (formFiltres.className === "hidden") {
        toggleButton.innerText = "Afficher les filtres";
    }
    else {
        toggleButton.innerText = "Cacher les filtres";
    }
})
