//Chargement du header et du footer
$(function () {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

//Création de la fonction MD5 (source stackoverflow)
var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

//Définissions des variables
let listDestination = [];
let voyagesJSON = {};
let allUsers = [];
let voyagesLocal = [];
let backgroundInterval;

//Fonction appeler sur chaque page pour demander la liste des voyages
function getVoyages() {
    if (sessionStorage.voyages && sessionStorage.voyages.length === listDestination.length) { //on vérifie qu'on as tous les voyages
        start(); //Si on as déjà les voyages on appel directement la fonction start qui est personnalisé sur chaque page
    } else { //sinon on recupere les voyages par l'API
        fetchJSONVoyages().then(voyages => {
            voyagesJSON = voyages;
            start(); // on appel start une fois qu'on as les données
        });
    }
}

//Fonction asynchrone de récupération des voyages par la méthode fetch
async function fetchJSONVoyages() {
    const response = await fetch('../voyages.json');
    const jsonVoyages = await response.json();
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

//Fonction appeler par les pages pour récuperé les utilisateurs
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

//Définission de la class d'un voyages
class Voyage {
    constructor(_selection) { //On récupère la selection (destination)
        if (sessionStorage.voyages) {
            try{
                var dest = JSON.parse(sessionStorage.voyages).find(function (voy) {
                    return voy._selection == _selection;
                });
            }
            catch (e){ //en cas d'érreur dans le parse on clear le sessionStorage pour le recréer plus tard
                sessionStorage.voyages = "";
            }
        } else
            dest = true;
        if (!sessionStorage.voyages || sessionStorage.voyages.length === 0 || !dest) { //Si on a pas de données dans le sessionStorage on va les récuperer dans le voyagesJSON
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

            // On ajoute le Voyage au SessionStorage
            let tab = [];
            if (sessionStorage.voyages) {
                let info = JSON.parse(sessionStorage.voyages);
                for (let e of info) {
                    tab.push(e);
                }
            }
            if (tab)
                tab.push(this);
            else
                tab = [this];
            sessionStorage.setItem("voyages", JSON.stringify(tab));

        } else { //Si on a trouver la destination dans le sessionStorage on la récupère
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
        //Pour la température
        if (this.value !== "espace") { //Si ce n'est pas l'espace (car openweathermap n'a pas de température pour l'espace
            // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ville + "&appid=df6563e90f96a55de8945ab09b817dc9&units=metric";  //on définit l'URL
            const url = "http://localhost:3000/" + this.ville;
            console.log(this._temperature);
            if (this._temperature == null || this._temperature === "Err") { //Si on a pas la température (Bug API ou 1ere visite)
                console.log("requette");
                $.ajax({  //Requette GET pour récuperer la température
                    url: url,
                    type: "GET",
                    dataType: "json",
                    success: (data) => {
                        console.log(data);
                        this._temperature = data.main.temp; //on définit la température
                        let tab = [];
                        //On la stock dans le sessionstorage
                        if (sessionStorage.voyages) {
                            let info = JSON.parse(sessionStorage.voyages);
                            for (let e of info) {
                                if (e._selection == _selection) {
                                    e._temperature = this._temperature;
                                }
                                tab.push(e);
                            }
                        }
                        sessionStorage.setItem("voyages", JSON.stringify(tab)); //On rajoute la température au sessionStorage
                        onUpdate(); //on appelle sur chaque page une fonction update personalisé
                    },
                    error: () => {
                        this._temperature = "Err"; //En cas de Bug API on affichera Err
                        //Qu'on stock quand même dans le sessionstorage
                        let tab = [];
                        if (sessionStorage.voyages) {
                            let info = JSON.parse(sessionStorage.voyages);
                            for (let e of info) {
                                if (e._selection == _selection) {
                                    e._temperature = this._temperature;
                                }
                                tab.push(e);
                            }
                        }
                        sessionStorage.setItem("voyages", JSON.stringify(tab)); //On rajoute la température au sessionStorage
                        onUpdate(); //on appelle sur chaque page une fonction update personalisé
                    }
                });
            }
        } else {
            this._temperature = -272; //temperature de l'espace, openWeather n'a pas cette donnée malheureusement
        }
    }

    //Function pour récurerer les différentes information d'un voyage
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
}

//Défintion de la Class qui créer des reservation en fonction d'un Voyage
class Reservation extends Voyage {
    constructor(m) {
        super(m); //On creer la reservation en fonction d'un voyage
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

        //permet de bloqué le boutton de validation si un utilisateur arrive a mettre un nombre de jour négatif
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

    //Fonction qui retourne le nombre de jour total de la reservation s'il est positif
    get nbJour() {
        if (dateDiff(this._datedebut, this._datefin).day > 0)
            return dateDiff(this._datedebut, this._datefin).day
        else
            alert("Le nombre de jour n'est pas bon");
        return 0;
    }

    //Fonction qui définit le nombre d'adulte si il est supérieur à 1
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

    //retour le nombre de personnes total
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

    //retour le prix total pour les adultes
    get totalAdulte() {
        return this.nbJour * this._nbadulte * this._prixnuit;
    }

    //calcul le prix d'une nuit pour un enfant
    get prixnuitenfant() {
        return this._prixnuit * 0.4;
    }

    // retourn le prix total pour les enfants
    get totalEnfants() {
        return this.nbJour * this._nbenfant * this.prixnuitenfant;
    }

    //retourn le prix total de la reservation
    get total() {
        return this.totalAdulte + this.totalEnfants + this.totalpetitdej;
    }

    get id() {
        return this._id;
    }
}

//Définition d'une class permettant de gérer les listes de Reservation (utilisé pour le panier)
class ListeReservations {
    constructor() {
    }

    //on récupère les info du local Storage (Ce n'est pas dans le constructeur afin de laisser la possibilté de récuperer l'info d'un historique par exemple)
    setFromLocalStorage() {
        if (localStorage.panier) {
            this._listReservations = [];
            let listReservation = JSON.parse(localStorage.panier);
            for (let e of listReservation) {
                console.log(e.value);
                const voyage = new Reservation(e.value);
                voyage.all(e.datedebut, e.datefin, e.nbadulte, e.nbenfant, e.petitdej, e.id);
                this.add = voyage;
            }
        }
    }

    //on ajoute une reservation a la liste
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

    //Fonction Permettant de filtrer seulement les informations utiles a Stocker (les autres seront regénérer automatiquement par la class voyage)
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

    //Pour récuperer la list trié par date
    get() {
        if (this._listReservations == undefined) {
            return [];
        } else {
            return this._listReservations.sort(function (a, b) {
                return a.datedebut - b.datedebut;
            });
        }
    }

    //Pour récuperer une Reservation par son ID
    getByID(id) {
        for (let e of this._listReservations) {
            if (e.id == id) {
                return e;
            }
        }
    }

    //Supprimer une reservation par son ID
    remove(id) {
        let toSuppr = "";
        this._listReservations.forEach(function (element, index) {
            if (element.id == id) {
                toSuppr = index;
            }
        })
        this._listReservations.splice(toSuppr, 1);
        window.localStorage.setItem("panier", JSON.stringify(this._listReservations));

    }

    //Pour modifier une reservation on recupère les données clean, on supprime l'id en question puis on ajoute le nouveau séjour
    modifi(id, sejour) {
        this.setFromLocalStorage();
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

//Fonction de calcul de différence entre 2 date (Source StackOverflow)
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

// Permet de transformer une date en format humainent lisible
function toFormattedDate(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

//Permet de mettre a jour les données sur la page en fonction des critères stocker dans le sessionStorage
function ecritureCritere() {
    let demain = new Date();
    demain.setDate(new Date().getDate() + 1); //calcule de la date de demain (valeur par défaut de la date de début)
    let lendemain = new Date();
    lendemain.setDate(demain.getDate() + 1); //calcule de la date du lendemain (valeur par défaut de la date de fin)

    if (sessionStorage.getItem("critere")) {
        crit = JSON.parse(sessionStorage.getItem("critere"));
        if (crit.datedebut == "") {
            document.getElementById('date-debut').value = demain.toISOString().substring(0, 10);
        } else {
            document.getElementById("date-debut").value = crit.datedebut;
            lendemain = new Date();
            lendemain.setDate(new Date(crit.datedebut).getDate() + 1); //On modifi le lendement en fonction de la date de début
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

//Sauvegarde les critéres dans le sessionStorage
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

//Permet de vérifier la validité des dates et de redéfinir si c'est pas bon
function verificationDate() {
    let datedebut = new Date(document.getElementById('date-debut').value);
    let demain = new Date();
    demain.setTime(new Date().getTime() + 24 * 3600 * 1000);

    document.getElementById('date-debut').min = demain.toISOString().substring(0, 10);
    //il ne faut pas que la date soit avant aujourd'hui
    if (datedebut < Date.now()) {
        // alert("La date de début n'est pas bonne");
        document.getElementById('date-debut').value = demain.toISOString().substring(0, 10);

        let lendemain = new Date();
        lendemain.setTime(demain.getTime() + 24 * 3600 * 1000);
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);

        datedebut = new Date(document.getElementById('date-debut').value);
    }
    let lendemain = new Date();
    lendemain.setTime(datedebut.getTime() + 24 * 3600 * 1000);
    document.getElementById('date-fin').min = lendemain.toISOString().substring(0, 10);

    datefin = new Date(document.getElementById('date-fin').value);

    if (dateDiff(datedebut, datefin).day <= 0) {
        document.getElementById('date-fin').value = lendemain.toISOString().substring(0, 10);
    }
}

//Permet la gestion du background aléatoire
function randomizeBackground() {
    let listBackgrounds = [];
    if (voyagesLocal.length == 0) { //Si voyageLocal est vide on prend toute les images
        for (let dest of listDestination)
            voyagesLocal.push(new Voyage(dest));
    }
    for (let dest of voyagesLocal) {
        listBackgrounds.push(dest.images); //Sinon on prend les images de Voyage Local (permet d'avoir un fond d'écran sur la page panier qui est en rapport avec les destinations sélectionné)
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

//Permet la récupération d'un cookie spécifique
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

//Lancement du background aléatoire
backgroundInterval = setInterval(function () {
    randomizeBackground();
}, 4000);
