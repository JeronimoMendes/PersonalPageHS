var navbar = document.getElementsByClassName("navbar");

var title = document.getElementById("name")

title.classList.add("loaded");
// Changes navbar background
window.onscroll = function() {
    console.log("Scrolling");
    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar[0].classList.add('scrolled');
    } else {
        navbar[0].classList.remove('scrolled');
    }
}

