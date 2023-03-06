
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
toggleBackgroundAnimation.addEventListener("click", () => {
    if (toggleBackgroundAnimation.className === "stop-background") {
        clearInterval(backgroundInterval);
        toggleBackgroundAnimation.className = "play-background";
        toggleBackgroundAnimation.getElementsByTagName("span")[0].innerHTML = "play_arrow";
    }
    else {
        randomizeBackground();
        toggleBackgroundAnimation.className = "stop-background";
        toggleBackgroundAnimation.getElementsByTagName("span")[0].innerHTML = "stop";
    }


})