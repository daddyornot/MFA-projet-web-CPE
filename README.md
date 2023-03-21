# Projet WEB - Agence de Voyages
## DUBOIS Maxime & MAILHEBIAU Damien

## Fonctionnalités de base

Toutes les fonctionnalités demandées sont implémentées.

## Fonctionnalités ajoutées
### Toutes les pages
- Background dynamique : tous les voyages défilent en arrière-plan, sauf sur la page panier qui ne fait défiler que les 
voyages du panier et la landing page qui a une image fixe
- Ajout d'un favicon
- Le logo du site a été créé par nous

### Page landing-page.html
- Ajout d'une page de landing pour accéder au site.

![landing](final/landing.png)
![img.png](img.png)

### Page index.html
![header](final/header_and_search.png)
![img.png](img.png)
- Ajout d'un bouton à gauche dans le header pour arrêter/démarrer le défilement du fond d'écran. Le pictogramme change 
selon le mode choisi.
- Les liens vers les différentes pages se colorent selon où on se trouve
- Ajout d'une barre de recherche pour trouver une destination, et texte personnalisé si pas de résultat

![header](final/no_results.png)

- Ajout d'une fenêtre modale de connexion

![login](final/compte_modal.png)

- Affichage texte des pictogrammes sous chaque voyage au survol de la souris

![hint](final/index_img_modal_hover.png)

### Page panier.html

- Possibilité de modifier ou supprimer un élément du panier

![panier](final/panier_modif.png)

- Informations utilisateur préremplies si on est connecté (sauf n° de carte)

![infos](final/panier_infos_preremplies.png)

### Page confirmation.html

- Calcul et affichage du nombre de jours restant avant le départ

![confirm](final/conf_calcul_jours.png)

### Page compte.html

- Affichage des infos utilisateur
- Affichage de l'historique des voyages : l'historique est écrit en dur dans le users.json, car on ne peut pas écrire et
/ou modifier l'historique des utilisateurs en JS.

## Optimisations 
- Requete API : si on a déjà la température, on ne refait pas de requête, elle est stockée dans le SessionStorage
- Fetch JSON : on récupère les données de tous les v``oyages une fois dans le JSON, et on les stocke dans le SessionStorage.
Tant que le SessionStorage n'est pas vide, on ne refait pas de requête pour les voyages.


---
# IDEES / TODO

- ~~adulte(s) a remplacer par singulier et pluriel~~
- ~~harmoniser le style de tous les inputs~~
- ~~background "live" => faire défiler les photos des destinations sur landing et index~~
- ~~background "conditionnel" sur detail sejour~~
- virer le .html dans l'url
- arriver sur la landing page du site
- ~~optimiser requete API : si on a deja la T°C on refait pas de requete~~
- ~~authentification~~
- ~~historique des voyages mode dur~~
- historique des voyages mode dynamique
- pop up accepter les cookies a l'arrivée
- responsive
- ~~bouton modifier panier : sur la meme page ! remplacer les lignes correspodnantes~~
- ajouter prévisions météo ?
- ajouter heure locale
- ~~Une recherche de destination~~
- Accessibilité 
- w3school
- Modification plusieurs destination a la fois
- ~~Panier "Attention modification en cours"
- ~~Panier click sur la destination pour aller vers la page détail sejour~~
- ~~Caroussel image buggé~~
- ~~Panier > background ne change pas tout seul~~
- ~~Panier > pas de fond d'écran par défault~~
- Panier > boutton "Ajouter un voyage"

# Questions
- Compatibilité navigateurs > Firefox / chrome
- JSON 
- User dans le même ou un nouveau JSON
- Sécurité ? > non
- Gestion des cas particuliers (suppression des données, modification cookies, ...) > NOn