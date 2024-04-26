document.getElementById("hamburger").addEventListener("click", openNavigation);

document.getElementById("close-header").addEventListener("click", closeNavigation);

var navItems = document.getElementsByClassName("nav-item");
for (var i = 0; i< navItems.length; i++) {
    navItems[i].onclick = closeNavigation;
}


function openNavigation() {
        document.getElementById("navigation").classList.add("expanded");
        document.getElementById("hamburger").classList.add("hidden");
        document.getElementById("close-header").classList.remove("hidden");
        document.body.classList.add("no-scroll");
};

function closeNavigation() {
    document.getElementById("navigation").classList.remove("expanded")
    document.getElementById("hamburger").classList.remove("hidden");
    document.getElementById("close-header").classList.add("hidden");
    document.body.classList.remove("no-scroll");
}