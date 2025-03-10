// Sélection des éléments
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

// Ajouter un événement pour afficher/masquer la barre latérale
menuIcon.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Masquer la barre latérale
    } else {
        sidebar.style.left = "0"; // Afficher la barre latérale
    }
});
