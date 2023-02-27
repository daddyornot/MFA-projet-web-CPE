
window.onload = () => {
    changeFilter();
    document.getElementById("filtres").addEventListener('input', changeFilter);


}

function changeFilter() {
    console.log('ChangeFilter');
    let voyage = [];

    for (let dest of listDestination) {
        voyage.push(new Voyage(dest));
    }
    if (document.getElementById("animaux-form").checked)
        voyage = voyage.filter(function (dest) {
            return dest._animaux;
        });
    let prixmax = document.getElementById("prix-max").value;
    document.getElementById("out-prix-max").value = prixmax;
    let prixmin = document.getElementById("prix-mini").value;
    document.getElementById("out-prix-mini").value = prixmin;

    voyage = voyage.filter(function (dest) {
        return prixmin <= dest._prixnuit && dest._prixnuit <= prixmax
    })

    document.getElementById("liste-destinations").innerHTML = templateGrid;
    // $("#liste-destinations").load("templateGrid.html");

    let template = document.querySelector("#listeDestinations");
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

var templateGrid = "<template id=\"listeDestinations\">\n" +
    "                <div class=\"grid-item\">\n" +
    "                    <div class=\"img-temp\">\n" +
    "                        <a href=\"detail-sejour.html?selection={{url}}\">\n" +
    "                            <h2>{{destination}}</h2>\n" +
    "                            <p class=\"temperature\">{{temperature}}°C</p>\n" +
    "                            <img class=\"grid-img\" src=\"{{imgDest}}\" alt=\"Photo des Maldive\">\n" +
    "                        </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"dest-infos\">\n" +
    "                            <span class=\"material-symbols-outlined\" id=\"animaux-destination\" style={{animaux}}>\n" +
    "                                pets\n" +
    "                            </span>\n" +
    "                            <p class=\"prix\">{{prixNuit}}€ /j</p>\n" +
    "                        </div>\n" +
    "                </div>\n" +
    "            </template>";