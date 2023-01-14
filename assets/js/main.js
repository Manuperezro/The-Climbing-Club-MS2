// Animation Navigation Var.
// code Inspired by the tutorial in  CodingLab  Youtube Channel.
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

//  toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    //  keep the selected mode 
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});


//  toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});


//Swiper Owl carousel  code inspired from Coding River Youtube Channel.

//Initialize owl Carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


// Customers Testimonials effects 

$(".col-testimonials").mouseover(function(){
    $(this).children('.testimonials').children('.stars').children('.stories').css("color", "white");
});

$(".col-testimonials").mouseout(function(){
    $(this).children('.testimonials').children('.stars').children('.stories').css("color", "#6c757d");
});