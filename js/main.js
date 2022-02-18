// Animation Navigation Var.
// Code from CodingLab  Youtube Channel.
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



//Swiper Owl carousel  code inspired from Coding River Youtube Channel.

//Initialize owl Carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



// call Image to create and effect in the call texts //

// const text = document.querySelector(".call");
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for(let i=0; i < splitText.length; i++){
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0; 
// let timer = setInterval(onTick, 50);

// function onTick(){ 
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if(char === splitText.length){
//         complete();
//         return;
//     }
// }

// function complete(){ 
//     clearInterval(timer);
//     timer = null;
// }





