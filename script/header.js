
url = window.location.pathname;
switch (true) {
    case url.includes("index"):
        document.getElementById("nos-voyages").className += "active";
        break;
    case url.includes("panier"):
        document.getElementById("panier").className += "active";
        break;
    case url.includes("propos"):
        document.getElementById("a-propos").className += "active";
        break;
}

let toggleBackgroundAnimation = document.getElementById("button-background");
let animationText = document.getElementById("animer");
toggleBackgroundAnimation.addEventListener("click", () => {
    if (toggleBackgroundAnimation.className === "stop-background") {
        clearInterval(backgroundInterval);
        toggleBackgroundAnimation.className = "play-background";
        toggleBackgroundAnimation.getElementsByTagName("span")[0].innerHTML = "play_arrow";
        animationText.innerHTML = "Démarrer";
    }
    else {
        randomizeBackground();
        toggleBackgroundAnimation.className = "stop-background";
        toggleBackgroundAnimation.getElementsByTagName("span")[0].innerHTML = "stop";
        animationText.innerHTML = "Arrêter";
    }
})

// Afficher la modal
function showModal() {
    if (getCookie("currentUser")) {
        document.getElementById("account-modal").style.display = "flex";
    }
    else {
        document.getElementById("login-modal").style.display = "flex";
    }
}

// Masquer la modal
function hideModal() {
    console.log("hidemodal");
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("account-modal").style.display = "none";
}

// Fermer la modal lorsque l'utilisateur clique sur le bouton "x"
document.getElementById("close-modal").addEventListener("click", hideModal);

// Fermer la modal lorsque l'utilisateur clique en dehors de la modal
window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("login-modal") ||
        event.target === document.getElementById("account-modal")) {
        hideModal();
    }
});

verifUserConnected()
