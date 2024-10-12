// Create and append the footer banner
const footer = document.createElement("footer");
footer.id = "cookie-banner";
document.body.appendChild(footer);

function updateCookieBanner(accepted) {
    const banner = document.getElementById("cookie-banner");
    if (accepted) {
        banner.innerHTML = 'Cookies were accepted. <a href="#" id="revoke-cookies">Would you like to revoke?</a>';
        document.getElementById("revoke-cookies").addEventListener("click", () => updateCookieBanner(false));
    } else {
        banner.innerHTML = 'This site uses cookies. <a href="#" id="accept-cookies">Accept Cookies</a>';
        document.getElementById("accept-cookies").addEventListener("click", () => updateCookieBanner(true));
    }
}

// Initialize the banner: unaccepted
updateCookieBanner(false);