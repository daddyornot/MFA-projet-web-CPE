

let connectedUser = verifUserConnected();
if (connectedUser) {
    document.getElementById("nom").innerHTML = connectedUser.nom;
    document.getElementById("prenom").innerHTML = connectedUser.prenom;
}
