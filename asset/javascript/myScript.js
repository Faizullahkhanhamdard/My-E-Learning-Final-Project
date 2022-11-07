$(document).ready(function(){
    $('.owl-carousel'). owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:10000,
         rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true
              
            },
            640:{
                items:2,
                nav:true
            },
          
            900:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
        }
        });
  });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



