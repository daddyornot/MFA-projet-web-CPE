$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

let listDestination = [];
let voyagesJSON = {};
let allUsers = [];
let voyagesLocal = [];
let backgroundInterval;

function getVoyages(){
    if (sessionStorage.voyages && sessionStorage.voyages.length === listDestination.length){ //on vérifie qu'on as tous les voyages
        start();
    } else { //sinon on recupere les voyages par l'API
        fetchJSONVoyages().then(voyages => {
            voyagesJSON = voyages;
            start(); // on appel start une fois qu'on as les données
        });
    }
}

async function fetchJSONVoyages() {
    const response = await fetch('../voyages.json');
    const jsonVoyages = await response.json();
    for (let val in jsonVoyages){
        listDestination.push(val);
    }
    return jsonVoyages;
}

async function fetchJSONUsers() {
    const response = await fetch('../users.json');
    return await response.json();
}

function getUser() {
    fetchJSONUsers().then(users => {
        allUsers = users;
        verifUserConnected();
        if (window.location.href.includes("compte")) {
            afficherInfosUser();
            afficherHistorique();
        }
        if (window.location.href.includes("panier")) {
            remplirInfos();
        }
    });
}

class Voyage {
    constructor(_selection){
        if (sessionStorage.voyages){
            var dest = JSON.parse(sessionStorage.voyages).find(function (voy) {
                return voy._selection == _selection;
            });

        } else
            dest = true;
            if (!sessionStorage.voyages || sessionStorage.voyages.length === 0 || !dest) {
                this._destination = voyagesJSON[_selection].destination;
                this._ville = voyagesJSON[_selection].ville;
                this._description = voyagesJSON[_selection].description;
                this._images = voyagesJSON[_selection].images;
                this._prixnuit = voyagesJSON[_selection].prixnuit;
                this._prixdej = 15;
                this._petitDejAvailable = voyagesJSON[_selection].petitDejAvailable;
                this._animaux = voyagesJSON[_selection].animaux;
                this._selection = _selection;
                this._idimg = 0;

                if (this.value !== "espace") {
                    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ville + "&appid=df6563e90f96a55de8945ab09b817dc9&units=metric";
                    if (this._temperature !== null) {
                        $.ajax({
                            url: url,
                            type: "GET",
                            dataType: "json",
                            success: (data) => {
                                this._temperature = data.main.temp;
                                let tab = [];
                                if (sessionStorage.voyages){
                                    let info = JSON.parse(sessionStorage.voyages);
                                    for (let e of info){
                                        if(e._selection == _selection){
                                            e._temperature = data.main.temp;
                                        }
                                        tab.push(e);
                                    }
                                }
                                sessionStorage.setItem("voyages", JSON.stringify(tab));
                                onUpdate();
                            },
                            error: () => {
                                alert("Erreur dans la requete API");
                            }
                        });
                    }
                } else {
                    this._temperature = -272; //temperature de l'espace, openWeather n'a pas cette donnée malheureusement
                }
                let tab = [];
                if (sessionStorage.voyages){
                    let info = JSON.parse(sessionStorage.voyages);
                    for (let e of info){
                        tab.push(e);
                    }
                }
                if (tab)
                    tab.push(this);
                else
                    tab = [this];
                sessionStorage.setItem("voyages", JSON.stringify(tab));

            } else {
                this._destination = dest._destination;
                this._ville = dest._ville;
                this._description = dest._description;
                this._images = dest._images;
                this._prixnuit = dest._prixnuit;
                this._prixdej = 15;
                this._petitDejAvailable = dest._petitDejAvailable;
                this._animaux = dest._animaux;
                this._selection = _selection;
                this._idimg = 0;
                this._temperature = dest._temperature;
        }

    }

    get destination() { return this._destination }
    get ville() {
        return this._ville
    }
    get description() { return this._description }
    get images() { return this._images }
    get prixNuit() { return this._prixnuit }
    get prixPetitDej() { return this._prixdej }
    get animaux() { return this._animaux }
    get value() { return this._selection}
    get nImage(){
        if(this._images.length == (this._idimg + 1) )
            this._idimg = 0;
        else
            this._idimg ++;
        let img = this._images[this._idimg];
        return img;
    }
    get pImage(){
        if(0 > (this._idimg - 1) )
            this._idimg = this._images.length - 1;
        else
            this._idimg --;
        let img = this._images[this._idimg];
        return img;
    }
    get sImage(){
        return this._images[this._idimg];
    }

    get temperature() {
        return this._temperature;
    }

    get petitDejAvailable(){
        return this._petitDejAvailable;
    }

}

class Reservation extends Voyage{
    constructor(m){
        super(m);
    }
    all(dDebut, dFin,nbAdultes, nbEnfants, petitDej, id){
        this._datedebut = new Date(dDebut);
        this._datefin = new Date(dFin);
        this._nbadulte = nbAdultes;
        this._nbenfant = nbEnfants;
        this._petitdej = petitDej;
        this._id = id;
    }

    setValue() {
        verificationDate();
        this._datedebut = new Date(document.getElementById('date-debut').value);
        this._datefin = new Date(document.getElementById('date-fin').value);

        if(this.nbJour <= 0)
            this._check = false;
        else
            this._check = true;

        this.nbAdulte = Number(document.getElementById('nb-adulte').value);
        this._nbenfant = Number(document.getElementById('nb-enfant').value);
        this._petitdej = document.getElementById('petitdej').checked;
    }
    get datedebut() { return this._datedebut };
    set datedebut(a) {this._datedebut = a};

    get datefin() { return this._datefin };
    set datefin(a) { this._datefin = a};
    get id() { return this._id };
    set id(m) { this._id = m};
    get check(){ return this._check };

    get nbJour() {
        if (dateDiff(this._datedebut, this._datefin).day > 0)
            return dateDiff(this._datedebut, this._datefin).day
        else
            alert("Le nombre de jour n'est pas bon");
        return 0;
    }

    set nbAdulte(a) {
        if (a < 1){
            alert("Il faut au minimum un adulte pour le voyage !");
            this._nbadulte = 1;
            document.getElementById('nb-adulte').value = 1;
        } else {
            this._nbadulte = a}
        }
    get nbAdulte() { return this._nbadulte };

    set nbEnfant(a) { this._nbenfant = a};
    get nbEnfant() { return this._nbenfant };

    set petitDej(a) { this._petitdej = a};
    get petitDej() { return this._petitdej };

    get nbPersonnes(){ return this._nbenfant + this._nbadulte }

    get totalpetitdej() {
        if (this._petitdej)
            return this.nbJour * this.nbPersonnes * this._prixdej;
        else
            return 0;
     }
    get totalAdulte(){
        return this.nbJour * this._nbadulte * this._prixnuit;
    }

    get prixnuitenfant(){
        return this._prixnuit * 0.4;
    }

    get totalEnfants(){
        return this.nbJour * this._nbenfant * this.prixnuitenfant;
    }

    get total(){
        return this.totalAdulte + this.totalEnfants + this.totalpetitdej;
    }
}

class ListeReservations {
    constructor() {
        
    }
    setFromHistory(){

    }
    setFromLocalStorage(){
        if(localStorage.panier){
            this._listReservations = [];
            let listReservation = JSON.parse(localStorage.panier);
            for (let e of listReservation){
                const voyage = new Reservation(e._selection);
                voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);
                this.add = voyage;
            }
        }
    }
    set add(a) {
        a.id = MD5(a._destination + a._datedebut + a._datefin + a._nbadulte + a._nbenfant + a._petitdej);
        if (this._listReservations){
            this._listReservations.push(a);
        }
        else
        {
            this._listReservations = [a];
        }
        window.localStorage.setItem("panier", JSON.stringify(this._listReservations));
    }
    get (){
        if (this._listReservations == undefined){
            return [];
        } else {
            return this._listReservations.sort(function (a, b) {
                return a.datedebut - b.datedebut;
            });
        }
    }
    getByID(id){
        for (let e of this._listReservations){
            if (e.id == id){
                return e;
            }
        }
    }

    remove(m){
        let toSuppr = "";
        this._listReservations.forEach(function (element, index){
            if(element.id == m){
                toSuppr = index;
            }
        })
        this._listReservations.splice(toSuppr, 1);
        window.localStorage.setItem("panier", JSON.stringify(this._listReservations));

    }

    modifi(id, sejour){
        this.setFromLocalStorage();
        this.remove(id);
        this.add = sejour;
    }
}

function imgNext(){
    clearInterval(backgroundInterval);
    //on stocke l'image, car à chaque appel de nImage on change d'index, idem pour imgPrevious()
    let currentImg = resa.nImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 0.5s ease"
    document.body.style.background = `url(${currentImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

function imgPrevious(){
    clearInterval(backgroundInterval);
    let currentImg = resa.pImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 0.5s ease"
    document.body.style.background = `url(${currentImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
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

function toFormattedDate(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

function ecritureCritere(){
    let demain = new Date();
    demain.setDate(new Date().getDate() + 1);
    let lendemain = new Date();
    lendemain.setDate(demain.getDate() +1 );

    if (sessionStorage.getItem("critere")){
        crit = JSON.parse(sessionStorage.getItem("critere"));
        if(crit.datedebut == ""){
            document.getElementById('date-debut').value = demain.toISOString().substring(0,10);
        }else
        {
            document.getElementById("date-debut").value = crit.datedebut ;
            lendemain = new Date();
            lendemain.setDate(new Date(crit.datedebut).getDate() +1 );
        }
        if(crit.datefin == ""){
            document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);
        } else {
            document.getElementById("date-fin").value = crit.datefin;
        }
        if(crit.nbadulte != "")
            document.getElementById("nb-adulte").value= crit.nbadulte ;
        if(crit.nbenfant != "")
            document.getElementById("nb-enfant").value = crit.nbenfant;
        if(crit.petitdej != "")
            document.getElementById("petitdej").checked = crit.petitdej;
    } else {
        document.getElementById('date-debut').value = demain.toISOString().substring(0,10);
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);
    }
}

function lectureCritere(){
    let critere = {
        datedebut : document.getElementById("date-debut").value,
        datefin : document.getElementById("date-fin").value,
        nbadulte : document.getElementById("nb-adulte").value,
        nbenfant : document.getElementById("nb-enfant").value,
        petitdej : document.getElementById("petitdej").checked,
    }
    window.sessionStorage.setItem("critere", JSON.stringify(critere));
}

function verificationDate(){
    let datedebut = new Date(document.getElementById('date-debut').value);
    let demain = new Date();
    demain.setTime(new Date().getTime() + 24 * 3600 * 1000);

    document.getElementById('date-debut').min = demain.toISOString().substring(0,10);

    if( datedebut < Date.now()){
        // alert("La date de début n'est pas bonne");
        document.getElementById('date-debut').value = demain.toISOString().substring(0,10);

        let lendemain = new Date();
        lendemain.setTime(demain.getTime() + 24 * 3600 * 1000);
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);

        datedebut = new Date(document.getElementById('date-debut').value);

    }
    let lendemain = new Date();
    lendemain.setTime(datedebut.getTime() + 24 * 3600 * 1000);
    document.getElementById('date-fin').min = lendemain.toISOString().substring(0,10);

    datefin = new Date(document.getElementById('date-fin').value);

    if(dateDiff(datedebut, datefin).day <= 0){
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0,10);
    }
}

function randomizeBackground() {
    let listBackgrounds = [];
    if (voyagesLocal.length == 0){
        for(let dest of listDestination)
            voyagesLocal.push(new Voyage(dest));
    }
    for (let dest of voyagesLocal) {
        listBackgrounds.push(dest.images);
    }
    // On concatène toutes nos url dans un seul tableau
    // l'opérateur de decomposition "..." extrait les éléments du tableau 1 à 1, pour les concaténer dans un seul
    // et même tableau
    let allBackgrounds = [].concat(...listBackgrounds);
    let rand = Math.floor(Math.random() * allBackgrounds.length);
    document.body.style.background = `url(${allBackgrounds[rand]}) no-repeat center center fixed`;
    document.body.style.transition = "background-image 0.5s ease";
    document.body.style.backgroundSize = 'cover';
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


backgroundInterval = setInterval(function () {
    randomizeBackground();
}, 4000);
