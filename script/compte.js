
window.onload = () => {



}

function displayInfosUser() {
    // console.log("compte.js : "+ connectedUser.username);
    if (connectedUser) {
        document.getElementById("nom").innerHTML = connectedUser.nom;
        document.getElementById("prenom").innerHTML = connectedUser.prenom;
        document.getElementById("adresse").innerHTML = connectedUser.adresse;
        document.getElementById("code-postal").innerHTML = connectedUser.codePostal;
        document.getElementById("ville").innerHTML = connectedUser.ville;
        document.getElementById("pays").innerHTML = connectedUser.pays;
        document.getElementById("tel").innerHTML = connectedUser.tel;
    }
    else {
        window.location.href = "index.html"
    }
}
