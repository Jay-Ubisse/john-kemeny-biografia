window.onload = function() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("research").style.display = "none";
}

function home() {
    document.getElementById("home-menu").style.color = "#0096C7";
    document.getElementById("about-menu").style.color = "#FFFFFF";
    document.getElementById("research-menu").style.color = "#FFFFFF";
    document.getElementById("career-menu").style.color = "#FFFFFF";

    document.getElementById("home").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("research").style.display = "none";
}

function about() {
    document.getElementById("home-menu").style.color = "#FFFFFF";
    document.getElementById("about-menu").style.color = "#0096C7";
    document.getElementById("research-menu").style.color = "#FFFFFF";
    document.getElementById("career-menu").style.color = "#FFFFFF";

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("career").style.display = "none";
    document.getElementById("research").style.display = "none";
}

function carrer() {
    document.getElementById("home-menu").style.color = "#FFFFFF";
    document.getElementById("about-menu").style.color = "#FFFFFF";
    document.getElementById("research-menu").style.color = "#FFFFFF";
    document.getElementById("career-menu").style.color = "#0096C7";

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("career").style.display = "block";
    document.getElementById("research").style.display = "none";
}

function research() {
    document.getElementById("home-menu").style.color = "#FFFFFF";
    document.getElementById("about-menu").style.color = "#FFFFFF";
    document.getElementById("research-menu").style.color = "#0096C7";
    document.getElementById("career-menu").style.color = "#FFFFFF";

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("research").style.display = "block";
}