
// Loading animation
var loading = document.getElementsByClassName("loading")
while (loading.length > 0) {
    console.log(loading[0]);
    loading[0].classList.add("loaded");
    loading[0].classList.remove("loading");
}


// Changes navbar background
var navbar = document.getElementsByClassName("navbar");
window.onscroll = function() {
    console.log("Scrolling");
    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar[0].classList.add('scrolled');
    } else {
        navbar[0].classList.remove('scrolled');
    }
}


new TypeIt("#bio", {
    speed: 70,
    loop: true
})
    .type("computer science student")
    .pause(700)
    .delete()
    .type("programmer")
    .pause(500)
    .delete()
    .type("photography enthusiast")
    .go();
