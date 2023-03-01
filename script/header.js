
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