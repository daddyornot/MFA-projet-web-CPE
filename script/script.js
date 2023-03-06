$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

let listDestination = ["maldive", "japon", "canada", "chine", "espace", "france", "islande"];
const voyages = {
    "japon": {
        destination: "Le Japon",
        ville: "Tokyo",
        description: "Un voyage au Japon est une expérience incroyable qui offre un mélange unique de traditions anciennes et de modernité. Imaginez-vous flâner dans les rues de Tokyo, une ville qui ne dort jamais, avec ses gratte-ciel illuminés, ses magasins colorés et ses restaurants de rue qui proposent une cuisine délicieuse.\n" +
            "\n" +
            "Ensuite, rendez-vous dans la ville historique de Kyoto, où vous pourrez découvrir des temples et des jardins japonais magnifiques et paisibles. Puis, pourquoi ne pas partir à la découverte de la culture japonaise en visitant le mont Fuji, l'emblématique montagne japonaise, ou en assistant à une cérémonie du thé traditionnelle ?\n" +
            "\n" +
            "Vous pourrez également goûter à la cuisine japonaise délicieuse et diversifiée, des sushis et des ramens à la street food comme les takoyakis ou okonomiyakis, ou encore vous détendre dans les onsens, les sources chaudes naturelles du pays.\n" +
            "\n" +
            "Enfin, ne manquez pas l'opportunité de découvrir la culture pop japonaise en visitant des quartiers comme Harajuku, Akihabara ou Shibuya, célèbres pour leurs magasins de mangas, leurs cafés à thème et leurs concerts de J-pop.\n" +
            "\n" +
            "Un voyage au Japon est une expérience inoubliable et unique, mélangeant traditions ancestrales et modernité, pour une immersion totale dans une culture riche et fascinante.",
        images: ["assets/img/japon/01.jpg", "assets/img/japon/02.jpg", "assets/img/japon/03.jpg", "assets/img/japon/04.jpg"],
        prixnuit: 400,
        petitDejAvailable: false,
        animaux: false,
    },
    "maldive": {
        destination: "Les Maldives",
        ville: "Malé",
        description: "Imaginez-vous sur des plages de sable blanc immaculées et des eaux cristallines d'un bleu turquoise éclatant, où vous pouvez vous détendre sous le soleil chaud et respirer l'air frais de l'océan Indien.\n" +
            "\n" +
            "Les Maldives offrent également une expérience unique de plongée sous-marine avec des récifs coralliens spectaculaires et une faune marine abondante. Vous pouvez nager avec des raies manta, des requins-baleines, des tortues et des poissons multicolores, et explorer des épaves sous-marines.\n" +
            "\n" +
            "Les Maldives sont également connues pour leur hospitalité et leur luxe inégalé, avec des complexes hôteliers cinq étoiles offrant des villas privées sur pilotis au-dessus de l'océan ou des suites avec accès direct à la plage. Les spas de renommée mondiale proposent des soins relaxants pour le corps et l'esprit, tandis que les restaurants proposent des plats délicieux à base de fruits de mer frais et de cuisine internationale.\n" +
            "\n" +
            "Enfin, les Maldives sont également une destination parfaite pour les amateurs de sports nautiques, tels que le surf, le kitesurf, le paddle, le ski nautique et le wakeboard.\n" +
            "\n" +
            "En somme, un voyage aux Maldives est un véritable paradis pour les amoureux de la plage, de la plongée, du luxe et de la nature, pour une expérience inoubliable dans un cadre idyllique.",
        images: ["assets/img/maldive/01.jpg", "assets/img/maldive/02.jpg", "assets/img/maldive/03.jpg"],
        prixnuit: 300,
        petitDejAvailable: true,
        animaux: false,
    },
    "canada": {
        destination: "Le Canada",
        ville: "Quebec",
        description: "Le Canada est un pays immense avec des paysages spectaculaires. Imaginez-vous explorer les magnifiques parcs nationaux des Rocheuses canadiennes, avec leurs montagnes majestueuses, leurs lacs cristallins et leurs forêts luxuriantes. Vous pourrez y randonner, faire du vélo, du kayak, du rafting et même de l'escalade.\n" +
            "\n" +
            "Vous pourrez également découvrir la culture dynamique et cosmopolite de Toronto, la plus grande ville du Canada, avec ses musées, ses galeries d'art, ses restaurants internationaux et ses spectacles de Broadway. Ou bien vous pouvez vous promener dans les charmantes rues de la ville de Québec, la plus vieille ville du Canada, avec son architecture européenne, sa culture française et son patrimoine historique.\n" +
            "\n" +
            "Le Canada est également célèbre pour ses vastes étendues de nature sauvage, notamment dans les parcs nationaux de Banff, Jasper et Yoho. Vous pourrez y observer des animaux tels que les ours, les wapitis, les caribous et les orignaux, et profiter de la beauté naturelle époustouflante des lacs, des montagnes et des glaciers.\n" +
            "\n" +
            "Enfin, ne manquez pas l'occasion de découvrir la culture autochtone du Canada en visitant des communautés et des réserves autochtones, et apprendre leur histoire, leur culture, mais aussi leur gastronomie.\n" +
            "\n" +
            "En somme, un voyage au Canada est une expérience passionnante pour les amoureux de la nature, de la culture et des grandes villes, pour une immersion totale dans un pays fascinant et accueillant.",
        images: ["assets/img/canada/01.jpg", "assets/img/canada/02.jpg", "assets/img/canada/03.jpg", "assets/img/canada/04.jpg", "assets/img/canada/05.jpg"],
        prixnuit: 250,
        petitDejAvailable: true,
        animaux: true,
    },
    "chine": {
        destination: "La Chine",
        ville: "Shangai",
        description: "La Chine est un pays vaste et fascinant, avec une histoire et une culture riches qui remontent à des milliers d'années. Imaginez-vous visiter la Grande Muraille de Chine, l'une des sept merveilles du monde, et découvrir l'histoire et la signification de cette structure emblématique. Vous pouvez également explorer les anciennes villes impériales telles que Pékin et Xi'an, avec leurs palais somptueux, leurs temples bouddhistes et leurs rues animées.\n" +
            "\n" +
            "La Chine est également célèbre pour sa cuisine délicieuse et variée, avec des plats tels que les dumplings, les nouilles sautées et le canard laqué de Pékin. Vous pourrez également découvrir le thé chinois dans des salons de thé traditionnels ou visiter des marchés alimentaires locaux pour goûter une grande variété de plats et de collations.\n" +
            "\n" +
            "En Chine, vous pourrez également découvrir des paysages naturels époustouflants, tels que les montagnes karstiques de Guilin, les paysages de la rivière Yangtze et les vastes plaines de la Mongolie intérieure. Vous pouvez également découvrir la culture chinoise à travers les arts traditionnels, tels que la calligraphie, la peinture, la sculpture et les opéras chinois.\n" +
            "\n" +
            "Enfin, ne manquez pas l'opportunité de découvrir la vie moderne en Chine en visitant des villes dynamiques telles que Shanghai et Hong Kong, avec leurs gratte-ciel impressionnants, leurs quartiers commerçants et leurs bars et restaurants branchés.\n" +
            "\n" +
            "En somme, un voyage en Chine est une expérience fascinante pour les amoureux de l'histoire, de la culture et de la cuisine, pour une immersion totale dans un pays incroyablement diversifié et passionnant.",
        images: ["assets/img/chine/01.jpg", "assets/img/chine/02.jpg", "assets/img/chine/03.jpg"],
        prixnuit: 500,
        petitDejAvailable: false,
        animaux: false,
    },
    "espace": {
        destination: "L'Espace ?!",
        ville: "ISS",
        description: "Imaginez-vous pouvoir voyager dans l'espace et visiter d'autres planètes de notre système solaire. Vous pourriez découvrir les paysages fascinants et les phénomènes uniques de chaque planète, ainsi que les technologies avancées nécessaires pour voyager dans l'espace.\n" +
            "\n" +
            "Sur Mars, vous pourriez explorer les vastes étendues de la planète rouge, y compris ses volcans éteints et ses canyons profonds. Vous pourriez également visiter le cratère de Gale, où le rover Curiosity de la NASA a découvert des preuves de l'ancienne présence d'eau sur Mars.\n" +
            "\n" +
            "Sur Vénus, vous pourriez découvrir la planète la plus chaude de notre système solaire, où les températures peuvent atteindre plus de 460 degrés Celsius. Vous pourriez également étudier les émissions volcaniques de Vénus, qui ont été détectées par des sondes spatiales.\n" +
            "\n" +
            "Sur Jupiter, la plus grande planète de notre système solaire, vous pourriez découvrir les tempêtes incroyables et les nuages colorés qui tourbillonnent autour de la planète. Vous pourriez également visiter les lunes de Jupiter, y compris Io, qui est l'une des lunes les plus volcaniques de notre système solaire.\n" +
            "\n" +
            "Sur Saturne, vous pourriez admirer ses célèbres anneaux, qui sont constitués de milliards de particules de glace et de roche. Vous pourriez également découvrir Titan, la plus grande lune de Saturne, qui possède une atmosphère dense et des lacs liquides de méthane et d'éthane à sa surface.\n" +
            "\n" +
            "Enfin, sur Pluton, vous pourriez explorer cette petite planète naine située à la frontière de notre système solaire. Vous pourriez y découvrir ses montagnes glacées, ses plaines lisses et ses cratères, ainsi que les mystères qui entourent la formation et l'évolution de cette planète.\n" +
            "\n" +
            "En somme, un voyage interplanétaire serait une expérience incroyable et unique pour les amateurs d'astronomie, pour une immersion totale dans l'univers fascinant et infini qui nous entoure.",
        images: ["assets/img/espace/01.jpg", "assets/img/espace/02.jpg", "assets/img/espace/03.jpg"],
        prixnuit: 5000,
        petitDejAvailable: false,
        animaux: true,
    },
    "france": {
        destination: "La France",
        ville: "Paris",
        description: "La France est un pays riche en histoire, culture et gastronomie, célèbre pour ses villes romantiques, ses châteaux majestueux, ses musées et ses galeries d'art, ainsi que sa cuisine délicieuse.\n" +
            "\n" +
            "Imaginez-vous flâner dans les rues étroites et pavées du Marais à Paris, où vous pourrez découvrir les boutiques de mode, les galeries d'art contemporain, les musées et les boulangeries pittoresques. Vous pouvez également vous promener le long de la Seine, visiter la Tour Eiffel et le Louvre, ou découvrir l'architecture gothique de Notre-Dame de Paris.\n" +
            "\n" +
            "La France est également célèbre pour ses magnifiques régions viticoles, telles que la Bourgogne, la Champagne et la vallée de la Loire. Vous pourrez y découvrir les vignobles, visiter les caves et déguster des vins de renommée mondiale.\n" +
            "\n" +
            "Les villes françaises telles que Nice, Cannes, Saint-Tropez et Monaco offrent des plages de sable fin, des eaux turquoise, des restaurants de fruits de mer et des marchés provençaux.\n" +
            "\n" +
            "La France est également un pays célèbre pour sa cuisine, avec ses plats raffinés et ses desserts délicieux. Vous pourrez déguster des plats comme le boeuf bourguignon, le coq au vin, les escargots, les crêpes et les macarons.\n" +
            "\n" +
            "Enfin, ne manquez pas l'opportunité de découvrir les châteaux de la Loire, les paysages pittoresques de la Provence, les montagnes majestueuses des Alpes et les falaises de la côte normande.\n" +
            "\n" +
            "En somme, un voyage en France est une expérience inoubliable pour les amoureux de la culture, de la gastronomie et de la beauté, pour une immersion totale dans un pays romantique et historique.",
        images: ["assets/img/france/01.jpg", "assets/img/france/02.jpg", "assets/img/france/03.jpg"],
        prixnuit: 150,
        petitDejAvailable: true,
        animaux: true,
    },
    "islande": {
        destination: "L'Islande",
        ville: "Reykjavík",
        description: "L'Islande est une île fascinante située dans l'océan Atlantique Nord, célèbre pour ses paysages à couper le souffle, ses sources chaudes naturelles, ses glaciers majestueux, ses aurores boréales et sa culture unique.\n" +
            "\n" +
            "Imaginez-vous explorer les paysages volcaniques spectaculaires de l'île, y compris les geysers, les cascades, les cratères et les champs de lave. Vous pourriez également visiter les glaciers, comme le Vatnajökull, qui est le plus grand glacier d'Europe, où vous pourriez faire de la randonnée sur la glace et explorer les grottes de glace.\n" +
            "\n" +
            "Vous pourriez également vous détendre dans l'une des nombreuses sources chaudes naturelles de l'Islande, telles que le Blue Lagoon, où vous pourriez profiter des eaux chaudes et apaisantes riches en minéraux.\n" +
            "\n" +
            "L'Islande est également célèbre pour ses aurores boréales, un spectacle incroyable de lumières colorées dans le ciel nocturne, qui peuvent être observées pendant les mois d'hiver.\n" +
            "\n" +
            "En outre, la culture islandaise est riche en folklore, en musique et en littérature. Vous pourriez visiter la capitale, Reykjavik, où vous pourriez découvrir les musées, les galeries d'art, les bars animés et les restaurants proposant des spécialités culinaires islandaises.\n" +
            "\n" +
            "Enfin, ne manquez pas l'opportunité de visiter les fjords de l'ouest de l'Islande, les plages de sable noir de Vik, les falaises de Latrabjarg et la péninsule de Snaefellsnes, qui ont inspiré Jules Verne pour son livre 'Voyage au centre de la Terre'.\n" +
            "\n" +
            "En somme, un voyage en Islande est une expérience inoubliable pour les amoureux de la nature, de la culture et de l'aventure, pour une immersion totale dans un pays unique et spectaculaire.",
        images: ["assets/img/islande/01.jpg", "assets/img/islande/02.jpg"],
        prixnuit: 180,
        petitDejAvailable: true,
        animaux: false,
    }
}

class Voyage {
    constructor(_selection){
        this._destination = voyages[_selection].destination;
        this._ville = voyages[_selection].ville;
        this._description = voyages[_selection].description;
        this._images = voyages[_selection].images;
        this._prixnuit = voyages[_selection].prixnuit;
        this._prixdej = 15;
        this._petitDejAvailable = voyages[_selection].petitDejAvailable;
        this._animaux = voyages[_selection].animaux;
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
                        // console.log(data);
                        this._temperature = data.main.temp;
                        onUpdate();
                    },
                    error: () => {
                        alert("Erreur dans la requete API");
                    }
                });
            }
        }
        else {
            this._temperature = -272; //temperature de l'espace, openWeather n'a pas cette donnée malheureusement
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

class Panier {
    constructor() {
        if(localStorage.panier){
            let panier = JSON.parse(localStorage.panier);
            for (let e of panier){
                const voyage = new Reservation(e._selection);
                voyage.all(e._datedebut, e._datefin, e._nbadulte, e._nbenfant, e._petitdej, e._id);
                this.add = voyage;
            }
        }
    }
    set add(a) {

        if (this._panier){
            a.id = this._panier.length;
            this._panier.push(a);
        }
        else
        {
            a.id = 0;
            this._panier = [a];
        }
        window.localStorage.setItem("panier", JSON.stringify(this._panier));
    }
    get (){
        if (this._panier == undefined){
            console.log("le panier est vide");
            return [];
        } else {
            this._panier.sort(function (a, b) {
                return a.datedebut - b.datedebut;
            }).forEach(function (element, index) {
                element.id = index;
            });

            return this._panier.sort(function (a, b) {
                return a.datedebut - b.datedebut;
            });
        }
    }

    remove(m){
        // console.log(m);
        let toSuppr = "";
        this._panier.forEach(function (element, index){
            if(element.id == m){
                toSuppr = index;
            }
        })
        this._panier.splice(toSuppr, 1);
        window.localStorage.setItem("panier", JSON.stringify(this._panier));

        // console.log(this._panier);
    }

    modifi(id, sejour){
        remove(id);
        this.add = sejour;
    }
}

function imgNext(){
    clearInterval(backgroundInterval);
    //on stocke l'image, car à chaque appel de nImage on change d'index, idem pour imgPrevious()
    let currentImg = resa.nImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 1.5s ease"
    document.body.style.background = `url(${currentImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.ba = 'cover';
}

function imgPrevious(){
    clearInterval(backgroundInterval);
    let currentImg = resa.pImage;
    document.getElementById("img-destination").setAttribute('src', currentImg);
    document.body.style.transition = "background-image 1.5s ease"
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
    for (let dest in voyages) {
        listBackgrounds.push(voyages[dest].images);
    }
    // On concatène toutes nos url dans un seul tableau
    // l'opérateur de decomposition "..." extrait les éléments du tableau 1 à 1, pour les concaténer dans un seul
    // et même tableau
    let allBackgrounds = [].concat(...listBackgrounds);
    let rand = Math.floor(Math.random() * allBackgrounds.length);
    // console.log(allBackgrounds.length)
    // console.log("changing background");
    // console.log(allBackgrounds[rand]);
    document.body.style.transition = "background-image 1.5s ease"
    document.body.style.background = `url(${allBackgrounds[rand]}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

let backgroundInterval;
randomizeBackground();
if (window.location.href.includes("index.html")
    || window.location.href.includes("landing-page.html")
    || window.location.href.includes("a-propos.html")) {
    backgroundInterval = setInterval(function () {
        randomizeBackground();
    }, 4000);
}
