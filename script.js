// --------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    // Load Header
    fetch("./components/header.html")
        .then(r => r.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;

            // INIT MENU AFTER HEADER LOADED
            initMobileMenu();
        });

    // Load Footer
    fetch("./components/footer.html")
        .then(r => r.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        });
});


// --------------------------------------
