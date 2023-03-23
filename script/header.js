// Afficher la modal
function hideAndShowModal() {
    //si la modal est déjà affichée, recliquer sur le bouton permet de la fermer
    if (document.getElementById("account-modal").style.display === "flex" ||
        document.getElementById("login-modal").style.display === "flex") {
        document.getElementById("login-modal").style.display = "none"
        document.getElementById("account-modal").style.display = "none"
    }
    //sinon on l'affiche, selon qu'on soit connecté ou non
    else {
        if (getCookie("currentUser")) {
            document.getElementById("account-modal").style.display = "flex";
        }
        else {
            document.getElementById("login-modal").style.display = "flex";
        }
    }
}

// Masquer la modal
function hideModal() {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("account-modal").style.display = "none";
}

function verifierLogin() {
    let loginUser = $("#username")
    let passwordUser = $("#password")
    let user;

    fetchJSONUsers().then((users) => {
        allUsers = users;
        // on regarde d'abord si l'username existe
        user = allUsers.find(userTry => {
            return userTry.username === loginUser.val();
        })
        // s'il existe, on teste le password
        if (user) {
            if (user.password === passwordUser.val()) {
                passwordUser.removeClass("wrongCredential");
                loginUser.removeClass("wrongCredential");
                loginUser.val("");
                passwordUser.val("");
                hideModal();
                window.location.reload();
                document.cookie = "currentUser=" + user.username;
                verifUserConnected();
            }
            else
            {
                loginUser.addClass("rightCredential");
                loginUser.removeClass("wrongCredential");
                passwordUser.addClass("wrongCredential");
            }
        }
        else
        {
            loginUser.addClass("wrongCredential");
        }
    })
}

function toggleShowPassword() {
    let buttonPasswd = $("#show-password");
    let passwordInput = $("#password");

    if (buttonPasswd.text() === "visibility") {
        passwordInput.attr("type", "text");
        buttonPasswd.text("visibility_off");
    }
    else {
        passwordInput.attr("type", "password");
        buttonPasswd.text("visibility");
    }
}

// On vérifie si un user est connecté pour afficher son prénom
function verifUserConnected() {
    currentUserCookie = getCookie("currentUser");
    if (currentUserCookie) {
        for (const user of allUsers) {
            if (user.username === currentUserCookie) {
                connectedUser = user;
                document.getElementById("msg-accueil").innerHTML = "Salut " + connectedUser.prenom + " " + connectedUser.nom + " !";
                break;
            }
        }
    }
    else {
        document.getElementById("msg-accueil").innerHTML = "";
        hideModal();
    }
}

function logout() {
    document.cookie = "currentUser=";
    //si on se déconnecte depuis le compte, on redirige vers l'accueil
    if (window.location.href.includes("compte.html")) {
        window.location.href = "index.html"
    }
    verifUserConnected();
}

let toggleBackgroundAnimation = document.getElementById("button-background");
let animationText = document.getElementById("animer");
let connectedUser;
let currentUserCookie;

//on change la couleur de la section du header selon où on est
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
    case url.includes("detail-sejour"):
        document.getElementById("round-button").style.display = "none";
        break;
}

//Image du background animée ou non
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

// Fermer la modal lorsque l'utilisateur clique sur le bouton "x"
document.getElementById("close-modal-login").addEventListener("click", hideModal);
document.getElementById("close-modal-account").addEventListener("click", hideModal);

// Fermer la modal lorsque l'utilisateur clique en dehors de la modal
window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("login-modal") ||
        event.target === document.getElementById("account-modal")) {
        hideModal();
    }
});

// On écoute si l'user appuie sur entrée pour se connecter
document.getElementById("password").addEventListener("keyup", function(key) {
    if (key.code === "NumpadEnter" || key.code === "Enter") {
        verifierLogin();
    }
})


getUser();
