window.onload = () => { //au chargement de la page
    ecritureCritere(); //on écrit les critères stockés dans le sessionStorage

    //dès qu'un filtre ou que la searchbar change on appelle la fonction changeFilter
    document.getElementById("filtres").addEventListener('input', changeFilter);
    document.getElementById("searchbar").addEventListener('input', changeFilter);

    //On récupère les voyages
    getVoyages();

    // Permet d'afficher/cacher les filtres et changer le texte du bouton
    const toggleButton = document.getElementById('toggle-filtres');
    const formFiltres = document.getElementById('filtres');

    toggleButton.addEventListener('click', () => {
        formFiltres.classList.toggle("active-filter");
        formFiltres.classList.toggle("hidden");
        formFiltres.classList.toggle("box");
        if (formFiltres.className === "hidden") {
            toggleButton.innerText = "Afficher les filtres";
        } else {
            toggleButton.innerText = "Cacher les filtres";
        }
    })
}

//Fonction start appelée une fois qu'on a les données
function start() { //on crée la liste de voyages et on génère le tableau une fois qu'on à les données
    for (let dest of listDestination) {
        voyagesLocal.push(new Voyage(dest));
    }
    randomizeBackground();
    changeFilter();
}

//en cas de mise à jour (Retour de l'API météo) on rappelle la fonction changeFilter
function onUpdate() {
    changeFilter();
}

//Cette fonction génère la liste des destinations possibles en fonction des filtres
function changeFilter() {
    let filter = voyagesLocal;
    let search = document.getElementById("searchbar").value;
    if(search !== ""){
        filter = filter.filter(function (dest) {
            return dest.destination.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                dest.ville.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        })
    }
    //filtre du petit déjeuner
    if ($("#petitdej")[0].checked) {
        filter = filter.filter(function (dest) {
            return dest.petitDejAvailable
        })
    }
    //filtre pour les animaux
    if (document.getElementById("animaux-form").checked)
        filter = filter.filter(function (dest) {
            return dest.animaux;
        });
    let prixmax = document.getElementById("prix-max").value;
    let prixmin = document.getElementById("prix-mini").value;

    //filtre en fonction du prix
    filter = filter.filter(function (dest) {
        return prixmin <= dest._prixnuit && dest._prixnuit <= prixmax
    })

    //Si aucun résultat ne correspond au critère, on affiche un message d'erreur
    if (filter.length === 0) {
        document.getElementById("liste-destinations").innerHTML = "";
        let aucunResultat = document.getElementById("no-destination");
        aucunResultat.style.display = "block";
        if (search) {
            aucunResultat.innerHTML = "Désolé, nous ne trouvons aucun voyage contenant '" + search + "' 😭"
        } else {
            aucunResultat.innerHTML = "Désolé, nous ne trouvons aucun voyage qui correspond à vos critères 😭"
        }
    } else {
        document.getElementById("no-destination").style.display = "none";
        let template = document.querySelector("#listeDestinations");
        document.getElementById("liste-destinations").innerHTML = "";
        //Pour chaque élément filtré on crée un clone du template avec ses valeurs
        for (const d of filter) {
            let clone = document.importNode(template.content, true);

            let newDestination = clone.firstElementChild.innerHTML
                .replace(/{{destination}}/g, d.destination)
                .replace(/{{temperature}}/g, d.temperature)
                .replace(/{{prixNuit}}/g, d.prixNuit)
                .replace(/{{src}}/g, "src") // permet d'éviter que le navigateur essaye de charger l'image {{img}}
                .replace(/{{imgDest}}/g, d.images[0])
                .replace(/{{url}}/g, d.value);

            clone.firstElementChild.innerHTML = newDestination;
            //Ajout ou pas de l'icone petit déjeuner et animaux
            if (!d.petitDejAvailable)
                clone.getElementById("ptidej-destination").style.display = "none";
            if (!d.animaux)
                clone.getElementById("animaux-destination").style.display = "none";

            document.getElementById("liste-destinations").appendChild(clone);
        }
    }
    lectureCritere(); //On met à jour le sessionStorage des critères avec les nouveaux critères
    verificationDate(); //On vérifie la validité des dates
}

//Réinitialisation du formulaire
function resetForm() {
    document.getElementById("prix-mini").value = document.getElementById("prix-mini").min;
    document.getElementById("prix-max").value = document.getElementById("prix-max").max;
    document.getElementById("nb-adulte").value = 1;
    document.getElementById("nb-enfant").value = 0;
    document.getElementById("animaux-form").checked = false;
    document.getElementById("petitdej").checked = false;
    document.getElementById('searchbar').value = "";
    sessionStorage.clear();
    ecritureCritere(); //écriture des valeurs pas défaut
    verificationDate(); //écriture des dates par défaut
    changeFilter(); //on met à jour les destinations avec ces nouveaux critères
}
