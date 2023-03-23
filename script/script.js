

//Création de la fonction MD5 (source stackoverflow)
var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

//Définissions des variables
let listDestination = [];
let voyagesJSON = {};
let allUsers = [];
let voyagesLocal = [];
let backgroundInterval;

document.addEventListener('DOMContentLoaded', function () {
    //Chargement du header et du footer
    $(function () {
        $("header").load("header.html");
        $("footer").load("footer.html");
    });
});

//Fonction appeler sur chaque page pour demander la liste des voyages
function getVoyages() {
    if (sessionStorage.voyages && Object.keys(JSON.parse(sessionStorage.voyages)).length > 0) {
        if (listDestination.length === 0){
            listDestination = [];
            for (let dest in JSON.parse(sessionStorage.voyages))
                listDestination.push(dest)
        }
        if (Object.keys(JSON.parse(sessionStorage.voyages)).length === listDestination.length) { //on vérifie qu'on a tous les voyages
            voyagesJSON = JSON.parse(sessionStorage.voyages);
            for (let val in voyagesJSON)
                getTemperature(val); //On va récupérer la température en cas de non réponse lors de la 1ere requête
            start(); //Si on a déjà les voyages, on appelle directement la fonction start qui est personnalisée sur chaque page
        }
    } else { //sinon, on recupère les voyages par l'API
        fetchJSONVoyages().then(voyages => {
            voyagesJSON = voyages;
            for (let val in voyagesJSON)
                getTemperature(val);
            start(); // on appelle start une fois qu'on a les données
        });
    }
}

//Fonction asynchrone de récupération des voyages par la méthode fetch
async function fetchJSONVoyages() {
    const response = await fetch('../voyages.json');
    const jsonVoyages = await response.json();
    listDestination=[];
    for (let val in jsonVoyages) {
        listDestination.push(val); //on génère la liste des destinations
    }
    return jsonVoyages;
}

//Fonction asynchrone de récupération des utilisateurs par la méthode fetch
async function fetchJSONUsers() {
    const response = await fetch('../users.json');
    return await response.json();
}

function getTemperature(val) {
    //Pour la température
    if (val !== "espace") { //Si ce n'est pas l'espace (car openweathermap n'a pas de température pour l'espace
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + voyagesJSON[val].ville + "&appid=df6563e90f96a55de8945ab09b817dc9&units=metric";  //on définit l'URL
        if (voyagesJSON[val].temperature == null || voyagesJSON[val].temperature === "Err") { //Si on n'a pas la température (Bug API ou 1ere visite)
            $.ajax({  //Requette GET pour récuperer la température
                url: url,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    voyagesJSON[val].temperature = data.main.temp; //on définit la température
                    addVoyageSession(val); //On stocke la valeur dans le sessionStorage

                    onUpdate(); //on appelle sur chaque page une fonction update personalisée
                },
                error: () => {
                    voyagesJSON[val].temperature = "Err"; //En cas de Bug API on affichera Err
                    //Qu'on stock quand même dans le sessionStorage
                    addVoyageSession(val);

                    onUpdate(); //on appelle sur chaque page une fonction update personalisée
                }
            });
        }
    } else {
        voyagesJSON[val].temperature = -272; //temperature de l'espace, openWeather n'a pas cette donnée malheureusement
        addVoyageSession(val);
    }
}

//Fonction appelée par les pages pour récuperer les utilisateurs
function getUser() {
    fetchJSONUsers().then(users => {
        allUsers = users;
        verifUserConnected();
        //On appelle les différentes fonctions nécéssaire en fonction de la page courante
        if (window.location.href.includes("compte")) {
            afficherInfosUser();
            afficherHistorique();
        }
        if (window.location.href.includes("panier")) {
            remplirInfos();
        }
    });
}

//Fonction permettant l'ajout et la modification d'un voyage dans le sessionStorage
function addVoyageSession(val){
    // On ajoute le Voyage au SessionStorage
    let tab = {};
    if (sessionStorage.voyages) {
        if (JSON.parse(sessionStorage.voyages).length !==0){
            // On ajoute le Voyage au SessionStorage
            tab = JSON.parse(sessionStorage.voyages);
            tab[val] = voyagesJSON[val];
        }
    } else {
        tab[val] = voyagesJSON[val];
    }
    sessionStorage.setItem("voyages", JSON.stringify(tab)); //On rajoute la température au sessionStorage
}

//Définission de la class d'un voyage
class Voyage {
    constructor(_selection) { //On récupère la selection (destination)
        if (sessionStorage.voyages) {
            try {
                var dest = JSON.parse(sessionStorage.voyages)[_selection];
            } catch (e) { //en cas d'erreur dans le parse, on clear le sessionStorage pour le recréer plus tard
                console.log(e);
                sessionStorage.voyages = "";
            }
        } else
            dest = true;
        if (!sessionStorage.voyages || sessionStorage.voyages.length === 0 || !dest) { //Si on n'a pas de données dans le sessionStorage on va les récupérer dans le voyagesJSON
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
            this._temperature = voyagesJSON[_selection].temperature;

            addVoyageSession(_selection);

        } else { //Si on a trouvé la destination dans le sessionStorage on la récupère
            this._destination = dest.destination;
            this._ville = dest.ville;
            this._description = dest.description;
            this._images = dest.images;
            this._prixnuit = dest.prixnuit;
            this._prixdej = 15;
            this._petitDejAvailable = dest.petitDejAvailable;
            this._animaux = dest.animaux;
            this._selection = _selection;
            this._idimg = 0;
            this._temperature = dest.temperature;
        }
    }

    //Function pour récurérer les différentes informations d'un voyage
    get destination() {
        return this._destination
    }

    get ville() {
        return this._ville
    }

    get description() {
        return this._description
    }

    get images() {
        return this._images
    }

    get prixNuit() {
        return this._prixnuit
    }

    get prixPetitDej() {
        return this._prixdej
    }

    get animaux() {
        return this._animaux
    }

    get value() {
        return this._selection
    }

    get temperature() {
        return this._temperature;
    }

    get petitDejAvailable() {
        return this._petitDejAvailable;
    }

    //Pour récupere l'image suivante
    get nImage() {
        if (this._images.length == (this._idimg + 1))
            this._idimg = 0;
        else
            this._idimg++;
        let img = this._images[this._idimg];
        return img;
    }

    //Pour récupere l'image précédente
    get pImage() {
        if (0 > (this._idimg - 1))
            this._idimg = this._images.length - 1;
        else
            this._idimg--;
        let img = this._images[this._idimg];
        return img;
    }

    //Mise à jour pour ajout de la température lors du retour de l'API
    update() {
        this._temperature = voyagesJSON[this.value].temperature;
    }
}

//Définition de la Class qui crée des reservations en fonction d'un Voyage
class Reservation extends Voyage {
    constructor(m) {
        super(m); //On crée la réservation en fonction d'un voyage
    }

    //Ajout des données par le script
    all(dDebut, dFin, nbAdultes, nbEnfants, petitDej, id) {
        this._datedebut = new Date(dDebut);
        this._datefin = new Date(dFin);
        this._nbadulte = nbAdultes;
        this._nbenfant = nbEnfants;
        this._petitdej = petitDej;
        this._id = id;
    }

    //Ajout des données par l'utilisateur
    setValue() {
        verificationDate();
        this._datedebut = new Date(document.getElementById('date-debut').value);
        this._datefin = new Date(document.getElementById('date-fin').value);

        //permet de bloquer le bouton de validation si un utilisateur arrive à mettre un nombre de jours négatif
        if (this.nbJour <= 0)
            this._check = false;
        else
            this._check = true;

        this.nbAdulte = Number(document.getElementById('nb-adulte').value);
        this._nbenfant = Number(document.getElementById('nb-enfant').value);
        this._petitdej = document.getElementById('petitdej').checked;
    }

    get datedebut() {
        return this._datedebut
    };

    set datedebut(a) {
        this._datedebut = a
    };

    get datefin() {
        return this._datefin
    };

    set datefin(a) {
        this._datefin = a
    };

    get id() {
        return this._id
    };

    set id(m) {
        this._id = m
    };

    get check() {
        return this._check
    };

    //Fonction qui retourne le nombre de jours total de la reservation s'il est positif
    get nbJour() {
        if (dateDiff(this._datedebut, this._datefin).day > 0)
            return dateDiff(this._datedebut, this._datefin).day
        else
            alert("Le nombre de jour n'est pas bon");
        return 0;
    }

    //Fonction qui définit le nombre d'adultes s'il est supérieur à 1
    set nbAdulte(a) {
        if (a < 1) {
            alert("Il faut au minimum un adulte pour le voyage !");
            this._nbadulte = 1;
            document.getElementById('nb-adulte').value = 1;
        } else {
            this._nbadulte = a
        }
    }

    get nbAdulte() {
        return this._nbadulte
    };

    set nbEnfant(a) {
        this._nbenfant = a
    };

    get nbEnfant() {
        return this._nbenfant
    };

    set petitDej(a) {
        this._petitdej = a
    };

    get petitDej() {
        return this._petitdej
    };

    //retourne le nombre de personnes total
    get nbPersonnes() {
        return this._nbenfant + this._nbadulte
    }

    //retourne le prix total pour le petit dej
    get totalpetitdej() {
        if (this._petitdej)
            return this.nbJour * this.nbPersonnes * this._prixdej;
        else
            return 0;
    }

    //retourne le prix total pour les adultes
    get totalAdulte() {
        return this.nbJour * this._nbadulte * this._prixnuit;
    }

    //calcule le prix d'une nuit pour un enfant
    get prixnuitenfant() {
        return this._prixnuit * 0.4;
    }

    // retourne le prix total pour les enfants
    get totalEnfants() {
        return this.nbJour * this._nbenfant * this.prixnuitenfant;
    }

    //retourne le prix total de la reservation
    get total() {
        return this.totalAdulte + this.totalEnfants + this.totalpetitdej;
    }

    get id() {
        return this._id;
    }
}

//Définition d'une classe permettant de gérer les listes de Reservation (utilisé pour le panier)
class ListeReservations{
    constructor() {
    }

    //on récupère les infos du localStorage (Ce n'est pas dans le constructeur afin de laisser la possibilité de récupérer l'info d'un historique par exemple)
    setFromLocalStorage() {
        if (localStorage.panier) {
            this._listReservations = [];
            let listReservation = JSON.parse(localStorage.panier);
            for (let e of listReservation) {
                const voyage = new Reservation(e.value);
                voyage.all(e.datedebut, e.datefin, e.nbadulte, e.nbenfant, e.petitdej, e.id);
                this.add = voyage;
            }
        }
    }

    //on ajoute une reservation à la liste
    set add(a) {
        a.id = MD5(a.destination + a.datedebut + a.datefin + a.nbadulte + a.nbenfant + a.petitdej); //on génère un ID
        if (this._listReservations) {
            this._listReservations.push(a);
        } else {
            this._listReservations = [a];
        }
        let DTO = [] //Passage par un DTO permettant de stocker seulement les informations utiles
        for (let resa of this._listReservations) {
            DTO.push(this.toDTO(resa))
        }
        window.localStorage.setItem("panier", JSON.stringify(DTO));
    }

    //Fonction Permettant de filtrer seulement les informations utiles à stocker (les autres seront regénérées automatiquement par la classe Voyage)
    toDTO(a) {
        let b = {
            value: a.value,
            datedebut: a.datedebut,
            datefin: a.datefin,
            nbadulte: a.nbAdulte,
            nbenfant: a.nbEnfant,
            petitdej: a.petitDej,
            id: a.id
        }
        return b;
    }

    //Pour récupérer la list triées par date croissante
    get() {
        if (this._listReservations == undefined) {
            return [];
        } else {
            return this._listReservations.sort(function (a, b) {
                return a.datedebut - b.datedebut;
            });
        }
    }

    //Pour récupérer une Reservation par son ID
    getByID(id) {
        for (let e of this._listReservations) {
            if (e.id == id) {
                return e;
            }
        }
    }

    //Supprimer une réservation par son ID
    remove(id) {
        let toSuppr = "";
        this._listReservations.forEach(function (element, index) {
            if (element.id == id) {
                toSuppr = index;
            }
        })
        this._listReservations.splice(toSuppr, 1);
        let DTO = [] //Passage par un DTO permettant de stocker seulement les informations utiles
        for (let resa of this._listReservations) {
            DTO.push(this.toDTO(resa))
        }
        window.localStorage.setItem("panier", JSON.stringify(DTO));
    }

    //Pour modifier une réservation, on récupère les données clean, on supprime l'id en question puis on ajoute le nouveau séjour
    modifi(id, sejour) {
        this.remove(id);
        this.add = sejour;
    }
}

//Permet la gestion des images sur la page détail (ainsi que l'image de background)
function imgNext() {
    clearInterval(backgroundInterval);
    //on stocke l'image, car à chaque appel de nImage on change d'index, idem pour imgPrevious()
    let currentImg = resa.nImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 0.5s ease"
    document.body.style.background = `url(${currentImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

//Permet la gestion des images sur la page détail (ainsi que l'image de background)
function imgPrevious() {
    clearInterval(backgroundInterval);
    let currentImg = resa.pImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 0.5s ease"
    document.body.style.background = `url(${currentImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

//Fonction de calcul de différence entre 2 dates (Source StackOverflow)
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

// Permet de transformer une date en format humainement lisible
function toFormattedDate(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

//Permet de mettre à jour les données sur la page en fonction des critères stocker dans le sessionStorage
function ecritureCritere() {
    let demain = new Date();
    demain.setDate(new Date().getDate() + 1); //calcul de la date de demain (valeur par défaut de la date de début)
    let lendemain = new Date();
    lendemain.setDate(demain.getDate() + 1); //calcul de la date du lendemain (valeur par défaut de la date de fin)

    if (sessionStorage.getItem("critere")) {
        crit = JSON.parse(sessionStorage.getItem("critere"));
        if (crit.datedebut == "") {
            document.getElementById('date-debut').value = demain.toISOString().substring(0, 10);
        } else {
            document.getElementById("date-debut").value = crit.datedebut;
            lendemain = new Date();
            lendemain.setDate(new Date(crit.datedebut).getDate() + 1); //On modifie le lendemain en fonction de la date de début
        }
        if (crit.datefin == "") {
            document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);
        } else {
            document.getElementById("date-fin").value = crit.datefin;
        }
        if (crit.nbadulte != "")
            document.getElementById("nb-adulte").value = crit.nbadulte;
        if (crit.nbenfant != "")
            document.getElementById("nb-enfant").value = crit.nbenfant;
        if (crit.petitdej != "")
            document.getElementById("petitdej").checked = crit.petitdej;
    } else { //Valeur par défaut
        document.getElementById('date-debut').value = demain.toISOString().substring(0, 10);
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);
    }
}

//Sauvegarde les critères dans le sessionStorage
function lectureCritere() {
    let critere = {
        datedebut: document.getElementById("date-debut").value,
        datefin: document.getElementById("date-fin").value,
        nbadulte: document.getElementById("nb-adulte").value,
        nbenfant: document.getElementById("nb-enfant").value,
        petitdej: document.getElementById("petitdej").checked,
    }
    window.sessionStorage.setItem("critere", JSON.stringify(critere));
}

//Permet de vérifier la validité des dates et de redéfinir si ce n'est pas bon
function verificationDate() {
    let datedebut = new Date(document.getElementById('date-debut').value);
    let demain = new Date();
    demain.setTime(new Date().getTime() + 24 * 3600 * 1000);

    document.getElementById('date-debut').min = demain.toISOString().substring(0, 10);
    //il ne faut pas que la date soit avant aujourd'hui
    if (datedebut < Date.now()) {
        document.getElementById('date-debut').value = demain.toISOString().substring(0, 10);

        let lendemain = new Date();
        lendemain.setTime(demain.getTime() + 24 * 3600 * 1000);
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);

        datedebut = new Date(document.getElementById('date-debut').value);
    }
    let lendemain = new Date();
    lendemain.setTime(datedebut.getTime() + 24 * 3600 * 1000);
    document.getElementById('date-fin').min = lendemain.toISOString().substring(0, 10);

    let datefin = new Date(document.getElementById('date-fin').value);

    if (dateDiff(datedebut, datefin).day <= 0) {
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);
    }
}

//Permet la gestion du background aléatoire
function randomizeBackground() {
    let listBackgrounds = [];
    if (voyagesLocal.length == 0) { //Si voyageLocal est vide on prend toutes les images
        for (let dest of listDestination)
            voyagesLocal.push(new Voyage(dest));
    }
    for (let dest of voyagesLocal) {
        listBackgrounds.push(dest.images); //Sinon, on prend les images de voyagesLocal (permet d'avoir un fond d'écran sur la page panier qui est en rapport avec les destinations sélectionnées)
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

//Permet la récupération d'un cookie spécifique => source: https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

//Lancement du background aléatoire si on n'est pas sur une de ces pages
if (!(window.location.pathname.includes("detail-sejour") ||
    window.location.pathname.includes("landing-page"))) {
    backgroundInterval = setInterval(function () {
        randomizeBackground();
    }, 4000);
}

