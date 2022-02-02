// Animation Navigation Var.
// Code from Dev Ed Youtube Channel.
const navSlide = () => { 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click', () =>{  
        //toggle Nav 
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) { 
                link.style.animation  =' '
            }else { 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();


//Swiper
//Initialize Swipper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
