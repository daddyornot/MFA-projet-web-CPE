$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

const voyages = {
    "japon": {
        destination: "Le Japon",
        description: "Le japon est beau",
        images: ["assets/img/japon/01.jpg", "assets/img/japon/02.jpg", "assets/img/japon/03.jpg", "assets/img/japon/04.jpg"],
        prixnuit: 400,
        prixdej: 15,
        animaux: false,
    },
    "maldive": {
        destination: "Les Maldives",
        description: "Les maldive y'a de l'eau",
        images: ["assets/img/maldive/01.jpg", "assets/img/maldive/02.jpg", "assets/img/maldive/03.jpg"],
        prixnuit: 300,
        prixdej: 15,
        animaux: false,
    },
    "canada": {
        destination: "Le Canada",
        description: "Des pancakes et du sirop d'erable !",
        images: ["assets/img/canada/01.jpg", "assets/img/canada/02.jpg", "assets/img/canada/03.jpg"],
        prixnuit: 250,
        prixdej: 12,
        animaux: true,
    },
    "chine": {
        destination: "La Chine",
        description: "Du riz et du saké !",
        images: ["assets/img/chine/01.jpg", "assets/img/chine/02.jpg", "assets/img/chine/03.jpg"],
        prixnuit: 500,
        prixdej: 11,
        animaux: false,
    },
    "espace": {
        destination: "L'Espace ?!",
        description: "Thanos et les aliens sont là !",
        images: ["assets/img/espace/01.jpg", "assets/img/espace/02.jpg", "assets/img/espace/03.jpg"],
        prixnuit: 50000,
        prixdej: 850,
        animaux: true,
    },
    "france": {
        destination: "La France",
        description: "Tout est bon dans le cochon !",
        images: ["assets/img/france/01.jpg", "assets/img/france/02.jpg", "assets/img/france/03.jpg"],
        prixnuit: 150,
        prixdej: 8,
        animaux: true,
    }
}

class Voyage {
    constructor(_selection){
        this._destination = voyages[_selection].destination;
        this._description = voyages[_selection].description;
        this._images = voyages[_selection].images;
        this._prixnuit = voyages[_selection].prixnuit;
        this._prixdej = voyages[_selection].prixdej;
        this._animaux = voyages[_selection].animaux;
        this._selection = _selection;
    }

    get destination() { return this._destination }
    get description() { return this._description }
    get images() { return this._images }
    get prixnuit() { return this._prixnuit }
    get prixdej() { return this._prixdej }
    get animaux() { return this._animaux }
    get value() { return this._selection}

}
class Reservation extends Voyage{
    constructor(m){
        super(m);

        
        this._datedebut = new Date(document.getElementById('date-debut').value);
        if( this._datedebut < Date.now()){
            alert("La date de début n'est pas bonne");
            let demain = new Date()
            demain.setDate(new Date().getDate() + 1);
            document.getElementById('date-debut').value = demain.toISOString().substring(0,10);

            let lendemain = new Date()
            lendemain.setDate(demain.getDate() +1 );
            document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);
            
            this._datedebut = new Date(document.getElementById('date-debut').value);

        }
        
        this._datefin = new Date(document.getElementById('date-fin').value);

        if(this.nbrjour <= 0){
            let lendemain = new Date()
            lendemain.setDate(this._datedebut.getDate() +1 );
            document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);

            this._datefin = new Date(document.getElementById('date-fin').value);

        }

        this._nbadulte = Number(document.getElementById('nb-adulte').value);
        this._nbenfant = Number(document.getElementById('nb-enfant').value);
        this._animaux = document.getElementById('animaux-form').checked;
        this._petitdej = document.getElementById('petitdej').checked;

        
    }
    set datedebut(a) {this._datedebut = a};
    get datedebut() { return this._datedebut };
    set datefin(a) { this._datefin = a};
    get datefin() { return this._datefin };
    get nbrjour() { return dateDiff(this._datedebut, this._datefin).day}

    set nbadulte(a) { this._nbadulte = a};
    get nbadulte() { return this._nbadulte };

    set nbenfant(a) { this._nbenfant = a};
    get nbenfant() { return this._nbenfant };
    
    set petitdej(a) { this._petitdej = a};
    get petitdej() { return this._petitdej };

    get nbrpersonnes(){ return this._nbenfant + this._nbadulte }

    get totalpetitdej() { 
        if (this._petitdej)
            return this.nbrjour * this.nbrpersonnes * this._prixdej;
        else 
            return 0;
     }
    get totalAdulte(){ 
        return this.nbrjour * this._nbadulte * this._prixnuit;
    }

    get prixnuitenfant(){
        return this._prixnuit * 0.6;
    }

    get totalEnfants(){ 
        return this.nbrjour * this._nbenfant * this.prixnuitenfant;
    }

    get total(){
        return this.totalAdulte + this.totalEnfants + this.totalpetitdej;
    }
}

window.onload = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    document.getElementById("form").addEventListener('change', changeform);

    if (urlParams.get('selection'))
        selection = urlParams.get('selection');
    else
        selection = "japon";

    console.log(voyages[selection].destination);
    var levoyage = new Voyage(selection);

    document.getElementById("titre-destination").innerHTML = levoyage.destination;
    document.getElementById("desc-destination").innerHTML = levoyage.description;
    document.getElementById("img-destination").setAttribute('src', levoyage.images[0]);
    if (levoyage.animaux)
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux sont acceptés !";
    else
        document.getElementById("animaux-destination").innerHTML = document.getElementById("animaux-destination").innerHTML + "Les animaux ne sont pas acceptés désolé !";

    let demain = new Date()
    demain.setDate(new Date().getDate() + 1);
    document.getElementById('date-debut').value = demain.toISOString().substring(0,10);

    let lendemain = new Date()
    lendemain.setDate(demain.getDate() +1 );
    document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);
    
    changeform();
}

function changeform() {
    resettab();
    var resa = new Reservation(selection);

    addligne(["Nuits adultes", resa.nbrjour, resa.nbadulte, resa.prixnuit, resa.totalAdulte]);
    addligne(["Nuits enfants", resa.nbrjour, resa.nbenfant, resa.prixnuitenfant , resa.totalEnfants]);

    if (resa.petitdej)
        addligne(["Petits déjeuner", resa.nbrjour, resa.nbrpersonnes, resa.prixdej , resa.totalpetitdej]);
    
    addligne(["Total", resa.nbrjour, resa.nbrpersonnes , "-" , resa.total]);

};

function addligne(ligne) {
    var row = document.createElement("tr");
    for (txt of ligne) {
        var cell = document.createElement("td");
        text = document.createTextNode(txt);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    document.getElementById('solde-destination').appendChild(row);
}

function imgNext(){
    alert("test");
}

function imgPrevious(){
    alert("test 2");

}

function resettab(){
    document.getElementById('solde-destination').innerHTML =
    "        <tr>\n" +
    "            <th>Element</th>\n" +
    "            <th>Nombre de jours</th>\n" +
    "            <th>Nombre de personne</th>\n" +
    "            <th>Prix unitaire</th>\n" +
    "            <th>Prix</th>\n" +
    "        </tr>";
}

function dateDiff(date1, date2) {
    var diff = {} // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
}


let voyage = [new Voyage("maldive"), new Voyage("japon"), new Voyage("canada"),
              new Voyage("chine"), new Voyage("espace"), new Voyage("france")];
let template = document.querySelector("#listeDestinations");

for (const d of voyage) {
    let clone = document.importNode(template.content, true);
    let animaux = "display: ";

    if(d.animaux) 
        animaux += "flex";
    else
        animaux += "none";

    newDestination = clone.firstElementChild.innerHTML
        .replace(/{{destination}}/g, d.destination)
        .replace(/{{temperature}}/g, d.prixdej)
        .replace(/{{prixNuit}}/g, d.prixnuit)
        .replace(/{{imgDest}}/g, d.images[0])
        .replace(/{{url}}/g, d.value)
        .replace(/{{animaux}}/g, animaux);
        
        clone.firstElementChild.innerHTML = newDestination;
        
        document.getElementById("liste-destinations").appendChild(clone);
}
