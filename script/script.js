$(function() {
    $("header").load("header.html");
    $("footer").load("footer.html");
});

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

let listDestination = [];
// const voyages = {
//     "japon": {
//         destination: "Le Japon",
//         ville: "Tokyo",
//         description: "Un voyage au Japon est une expérience incroyable qui offre un mélange unique de traditions anciennes et de modernité. Imaginez-vous flâner dans les rues de Tokyo, une ville qui ne dort jamais, avec ses gratte-ciel illuminés, ses magasins colorés et ses restaurants de rue qui proposent une cuisine délicieuse.\n" +
//             "\n" +
//             "Ensuite, rendez-vous dans la ville historique de Kyoto, où vous pourrez découvrir des temples et des jardins japonais magnifiques et paisibles. Puis, pourquoi ne pas partir à la découverte de la culture japonaise en visitant le mont Fuji, l'emblématique montagne japonaise, ou en assistant à une cérémonie du thé traditionnelle ?\n" +
//             "\n" +
//             "Vous pourrez également goûter à la cuisine japonaise délicieuse et diversifiée, des sushis et des ramens à la street food comme les takoyakis ou okonomiyakis, ou encore vous détendre dans les onsens, les sources chaudes naturelles du pays.\n" +
//             "\n" +
//             "Enfin, ne manquez pas l'opportunité de découvrir la culture pop japonaise en visitant des quartiers comme Harajuku, Akihabara ou Shibuya, célèbres pour leurs magasins de mangas, leurs cafés à thème et leurs concerts de J-pop.\n" +
//             "\n" +
//             "Un voyage au Japon est une expérience inoubliable et unique, mélangeant traditions ancestrales et modernité, pour une immersion totale dans une culture riche et fascinante.",
//         images: ["assets/img/japon/01.jpg", "assets/img/japon/02.jpg", "assets/img/japon/03.jpg", "assets/img/japon/04.jpg"],
//         prixnuit: 400,
//         petitDejAvailable: false,
//         animaux: false,
//     },
//     "maldive": {
//         destination: "Les Maldives",
//         ville: "Malé",
//         description: "Imaginez-vous sur des plages de sable blanc immaculées et des eaux cristallines d'un bleu turquoise éclatant, où vous pouvez vous détendre sous le soleil chaud et respirer l'air frais de l'océan Indien.\n" +
//             "\n" +
//             "Les Maldives offrent également une expérience unique de plongée sous-marine avec des récifs coralliens spectaculaires et une faune marine abondante. Vous pouvez nager avec des raies manta, des requins-baleines, des tortues et des poissons multicolores, et explorer des épaves sous-marines.\n" +
//             "\n" +
//             "Les Maldives sont également connues pour leur hospitalité et leur luxe inégalé, avec des complexes hôteliers cinq étoiles offrant des villas privées sur pilotis au-dessus de l'océan ou des suites avec accès direct à la plage. Les spas de renommée mondiale proposent des soins relaxants pour le corps et l'esprit, tandis que les restaurants proposent des plats délicieux à base de fruits de mer frais et de cuisine internationale.\n" +
//             "\n" +
//             "Enfin, les Maldives sont également une destination parfaite pour les amateurs de sports nautiques, tels que le surf, le kitesurf, le paddle, le ski nautique et le wakeboard.\n" +
//             "\n" +
//             "En somme, un voyage aux Maldives est un véritable paradis pour les amoureux de la plage, de la plongée, du luxe et de la nature, pour une expérience inoubliable dans un cadre idyllique.",
//         images: ["assets/img/maldive/01.jpg", "assets/img/maldive/02.jpg", "assets/img/maldive/03.jpg"],
//         prixnuit: 300,
//         petitDejAvailable: true,
//         animaux: false,
//     },
//     "canada": {
//         destination: "Le Canada",
//         ville: "Quebec",
//         description: "Le Canada est un pays immense avec des paysages spectaculaires. Imaginez-vous explorer les magnifiques parcs nationaux des Rocheuses canadiennes, avec leurs montagnes majestueuses, leurs lacs cristallins et leurs forêts luxuriantes. Vous pourrez y randonner, faire du vélo, du kayak, du rafting et même de l'escalade.\n" +
//             "\n" +
//             "Vous pourrez également découvrir la culture dynamique et cosmopolite de Toronto, la plus grande ville du Canada, avec ses musées, ses galeries d'art, ses restaurants internationaux et ses spectacles de Broadway. Ou bien vous pouvez vous promener dans les charmantes rues de la ville de Québec, la plus vieille ville du Canada, avec son architecture européenne, sa culture française et son patrimoine historique.\n" +
//             "\n" +
//             "Le Canada est également célèbre pour ses vastes étendues de nature sauvage, notamment dans les parcs nationaux de Banff, Jasper et Yoho. Vous pourrez y observer des animaux tels que les ours, les wapitis, les caribous et les orignaux, et profiter de la beauté naturelle époustouflante des lacs, des montagnes et des glaciers.\n" +
//             "\n" +
//             "Enfin, ne manquez pas l'occasion de découvrir la culture autochtone du Canada en visitant des communautés et des réserves autochtones, et apprendre leur histoire, leur culture, mais aussi leur gastronomie.\n" +
//             "\n" +
//             "En somme, un voyage au Canada est une expérience passionnante pour les amoureux de la nature, de la culture et des grandes villes, pour une immersion totale dans un pays fascinant et accueillant.",
//         images: ["assets/img/canada/01.jpg", "assets/img/canada/02.jpg", "assets/img/canada/03.jpg", "assets/img/canada/04.jpg", "assets/img/canada/05.jpg"],
//         prixnuit: 250,
//         petitDejAvailable: true,
//         animaux: true,
//     },
//     "chine": {
//         destination: "La Chine",
//         ville: "Shangai",
//         description: "La Chine est un pays vaste et fascinant, avec une histoire et une culture riches qui remontent à des milliers d'années. Imaginez-vous visiter la Grande Muraille de Chine, l'une des sept merveilles du monde, et découvrir l'histoire et la signification de cette structure emblématique. Vous pouvez également explorer les anciennes villes impériales telles que Pékin et Xi'an, avec leurs palais somptueux, leurs temples bouddhistes et leurs rues animées.\n" +
//             "\n" +
//             "La Chine est également célèbre pour sa cuisine délicieuse et variée, avec des plats tels que les dumplings, les nouilles sautées et le canard laqué de Pékin. Vous pourrez également découvrir le thé chinois dans des salons de thé traditionnels ou visiter des marchés alimentaires locaux pour goûter une grande variété de plats et de collations.\n" +
//             "\n" +
//             "En Chine, vous pourrez également découvrir des paysages naturels époustouflants, tels que les montagnes karstiques de Guilin, les paysages de la rivière Yangtze et les vastes plaines de la Mongolie intérieure. Vous pouvez également découvrir la culture chinoise à travers les arts traditionnels, tels que la calligraphie, la peinture, la sculpture et les opéras chinois.\n" +
//             "\n" +
//             "Enfin, ne manquez pas l'opportunité de découvrir la vie moderne en Chine en visitant des villes dynamiques telles que Shanghai et Hong Kong, avec leurs gratte-ciel impressionnants, leurs quartiers commerçants et leurs bars et restaurants branchés.\n" +
//             "\n" +
//             "En somme, un voyage en Chine est une expérience fascinante pour les amoureux de l'histoire, de la culture et de la cuisine, pour une immersion totale dans un pays incroyablement diversifié et passionnant.",
//         images: ["assets/img/chine/01.jpg", "assets/img/chine/02.jpg", "assets/img/chine/03.jpg"],
//         prixnuit: 500,
//         petitDejAvailable: false,
//         animaux: false,
//     },
//     "espace": {
//         destination: "L'Espace ?!",
//         ville: "ISS",
//         description: "Imaginez-vous pouvoir voyager dans l'espace et visiter d'autres planètes de notre système solaire. Vous pourriez découvrir les paysages fascinants et les phénomènes uniques de chaque planète, ainsi que les technologies avancées nécessaires pour voyager dans l'espace.\n" +
//             "\n" +
//             "Sur Mars, vous pourriez explorer les vastes étendues de la planète rouge, y compris ses volcans éteints et ses canyons profonds. Vous pourriez également visiter le cratère de Gale, où le rover Curiosity de la NASA a découvert des preuves de l'ancienne présence d'eau sur Mars.\n" +
//             "\n" +
//             "Sur Vénus, vous pourriez découvrir la planète la plus chaude de notre système solaire, où les températures peuvent atteindre plus de 460 degrés Celsius. Vous pourriez également étudier les émissions volcaniques de Vénus, qui ont été détectées par des sondes spatiales.\n" +
//             "\n" +
//             "Sur Jupiter, la plus grande planète de notre système solaire, vous pourriez découvrir les tempêtes incroyables et les nuages colorés qui tourbillonnent autour de la planète. Vous pourriez également visiter les lunes de Jupiter, y compris Io, qui est l'une des lunes les plus volcaniques de notre système solaire.\n" +
//             "\n" +
//             "Sur Saturne, vous pourriez admirer ses célèbres anneaux, qui sont constitués de milliards de particules de glace et de roche. Vous pourriez également découvrir Titan, la plus grande lune de Saturne, qui possède une atmosphère dense et des lacs liquides de méthane et d'éthane à sa surface.\n" +
//             "\n" +
//             "Enfin, sur Pluton, vous pourriez explorer cette petite planète naine située à la frontière de notre système solaire. Vous pourriez y découvrir ses montagnes glacées, ses plaines lisses et ses cratères, ainsi que les mystères qui entourent la formation et l'évolution de cette planète.\n" +
//             "\n" +
//             "En somme, un voyage interplanétaire serait une expérience incroyable et unique pour les amateurs d'astronomie, pour une immersion totale dans l'univers fascinant et infini qui nous entoure.",
//         images: ["assets/img/espace/01.jpg", "assets/img/espace/02.jpg", "assets/img/espace/03.jpg"],
//         prixnuit: 5000,
//         petitDejAvailable: false,
//         animaux: true,
//     },
//     "france": {
//         destination: "La France",
//         ville: "Paris",
//         description: "La France est un pays riche en histoire, culture et gastronomie, célèbre pour ses villes romantiques, ses châteaux majestueux, ses musées et ses galeries d'art, ainsi que sa cuisine délicieuse.\n" +
//             "\n" +
//             "Imaginez-vous flâner dans les rues étroites et pavées du Marais à Paris, où vous pourrez découvrir les boutiques de mode, les galeries d'art contemporain, les musées et les boulangeries pittoresques. Vous pouvez également vous promener le long de la Seine, visiter la Tour Eiffel et le Louvre, ou découvrir l'architecture gothique de Notre-Dame de Paris.\n" +
//             "\n" +
//             "La France est également célèbre pour ses magnifiques régions viticoles, telles que la Bourgogne, la Champagne et la vallée de la Loire. Vous pourrez y découvrir les vignobles, visiter les caves et déguster des vins de renommée mondiale.\n" +
//             "\n" +
//             "Les villes françaises telles que Nice, Cannes, Saint-Tropez et Monaco offrent des plages de sable fin, des eaux turquoise, des restaurants de fruits de mer et des marchés provençaux.\n" +
//             "\n" +
//             "La France est également un pays célèbre pour sa cuisine, avec ses plats raffinés et ses desserts délicieux. Vous pourrez déguster des plats comme le boeuf bourguignon, le coq au vin, les escargots, les crêpes et les macarons.\n" +
//             "\n" +
//             "Enfin, ne manquez pas l'opportunité de découvrir les châteaux de la Loire, les paysages pittoresques de la Provence, les montagnes majestueuses des Alpes et les falaises de la côte normande.\n" +
//             "\n" +
//             "En somme, un voyage en France est une expérience inoubliable pour les amoureux de la culture, de la gastronomie et de la beauté, pour une immersion totale dans un pays romantique et historique.",
//         images: ["assets/img/france/01.jpg", "assets/img/france/02.jpg", "assets/img/france/03.jpg"],
//         prixnuit: 150,
//         petitDejAvailable: true,
//         animaux: true,
//     },
//     "islande": {
//         destination: "L'Islande",
//         ville: "Reykjavík",
//         description: "L'Islande est une île fascinante située dans l'océan Atlantique Nord, célèbre pour ses paysages à couper le souffle, ses sources chaudes naturelles, ses glaciers majestueux, ses aurores boréales et sa culture unique.\n" +
//             "\n" +
//             "Imaginez-vous explorer les paysages volcaniques spectaculaires de l'île, y compris les geysers, les cascades, les cratères et les champs de lave. Vous pourriez également visiter les glaciers, comme le Vatnajökull, qui est le plus grand glacier d'Europe, où vous pourriez faire de la randonnée sur la glace et explorer les grottes de glace.\n" +
//             "\n" +
//             "Vous pourriez également vous détendre dans l'une des nombreuses sources chaudes naturelles de l'Islande, telles que le Blue Lagoon, où vous pourriez profiter des eaux chaudes et apaisantes riches en minéraux.\n" +
//             "\n" +
//             "L'Islande est également célèbre pour ses aurores boréales, un spectacle incroyable de lumières colorées dans le ciel nocturne, qui peuvent être observées pendant les mois d'hiver.\n" +
//             "\n" +
//             "En outre, la culture islandaise est riche en folklore, en musique et en littérature. Vous pourriez visiter la capitale, Reykjavik, où vous pourriez découvrir les musées, les galeries d'art, les bars animés et les restaurants proposant des spécialités culinaires islandaises.\n" +
//             "\n" +
//             "Enfin, ne manquez pas l'opportunité de visiter les fjords de l'ouest de l'Islande, les plages de sable noir de Vik, les falaises de Latrabjarg et la péninsule de Snaefellsnes, qui ont inspiré Jules Verne pour son livre 'Voyage au centre de la Terre'.\n" +
//             "\n" +
//             "En somme, un voyage en Islande est une expérience inoubliable pour les amoureux de la nature, de la culture et de l'aventure, pour une immersion totale dans un pays unique et spectaculaire.",
//         images: ["assets/img/islande/01.jpg", "assets/img/islande/02.jpg"],
//         prixnuit: 180,
//         petitDejAvailable: true,
//         animaux: false,
//     }
// }

// const users = [
//     {
//         username: "usernameTest",
//         password: "passwordTest",
//         nom: "nomTest",
//         prenom: "prenomTest"
//     },
//     {
//         username: "usernameTest1",
//         password: "passwordTest1",
//         nom: "nomTest1",
//         prenom: "prenomTest1"
//     },
//     {
//         username: "usernameTest2",
//         password: "passwordTest2",
//         nom: "nomTest2",
//         prenom: "prenomTest2"
//     },
//     {
//         username: "test",
//         password: "test",
//         nom: "nomTest3",
//         prenom: "prenomTest3"
//     }
// ]

let voyagesJSON = {};
let allUsers = [];

function getVoyages(){
    if (localStorage.voyages && localStorage.voyages.length === listDestination.length){ //on vérifie qu'on as tous les voyages
        // voyagesJSON = JSON.parse(localStorage.voyages);
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
    // console.log("fetch données json");
    // console.log(jsonVoyages);
    // voyagesJSON = jsonVoyages;
    for (let val in jsonVoyages){
        listDestination.push(val);
    }
    return jsonVoyages;
}

async function fetchJSONUsers() {
    const response = await fetch('../users.json');
    // const jsonUsers = await response.json();
    return await response.json();
}

function getUser() {
    fetchJSONUsers().then(users => {
        allUsers = users;
        verifUserConnected();
        if (window.location.href.includes("compte.html")) {
            afficherInfosUser();
            afficherHistorique();
        }
    });
}

class Voyage {
    constructor(_selection){
        if (localStorage.voyages){
            var dest = JSON.parse(localStorage.voyages).find(function (voy) {
                return voy._selection == _selection;
            });

        } else
            dest = true;
            if (!localStorage.voyages || localStorage.voyages.length === 0 || !dest) {
                // console.log("Requete API");
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
                                // console.log(data);
                                this._temperature = data.main.temp;
                                let tab = [];
                                if (localStorage.voyages){
                                    let info = JSON.parse(localStorage.voyages);
                                    for (let e of info){
                                        if(e._selection == _selection){
                                            e._temperature = data.main.temp;
                                        }
                                        tab.push(e);
                                    }
                                }
                                localStorage.setItem("voyages", JSON.stringify(tab));
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
                if (localStorage.voyages){
                    let info = JSON.parse(localStorage.voyages);
                    for (let e of info){
                        tab.push(e);
                    }
                }
                if (tab)
                    tab.push(this);
                else
                    tab = [this];
                localStorage.setItem("voyages", JSON.stringify(tab));

            } else {
                // console.log("Pas de requetes API");
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
            console.log("la liste est vide");
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
        // console.log(m);
        let toSuppr = "";
        this._listReservations.forEach(function (element, index){
            if(element.id == m){
                toSuppr = index;
            }
        })
        this._listReservations.splice(toSuppr, 1);
        window.localStorage.setItem("panier", JSON.stringify(this._listReservations));

        // console.log(this._panier);
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


let backgroundInterval;

if (window.location.href.includes("index.html")
    || window.location.href.includes("landing-page.html")
    || window.location.href.includes("compte.html")
    || window.location.href.includes("a-propos.html")) {
    backgroundInterval = setInterval(function () {
        randomizeBackground();
    }, 4000);
}
