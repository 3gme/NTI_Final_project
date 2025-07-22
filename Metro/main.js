$('.owl-carousel-one').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 25,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        
        200: {
            items: 2,
            nav: false
        },
        480: {
            items: 3,
            nav: false
        },
        768: {
            items: 4,
            nav: false
        },
        992: {
            items: 5,
            nav: false
        },
        1200: {
            items: 6,
            nav: false
        },
        1400: {
            items: 8,
            nav: false
        }
    }
});

$('.carousel-two').owlCarousel({
    loop:true,
    dots:false,
    margin:1,
    nav:true,
    responsive:{
        0: {
            items: 1,
        },
        
        200: {
            items: 2,
        },
        480: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
        1200: {
            items: 6,
        }
    }
})
$('.carousel-three').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    responsive:{  
        200: {
            items: 1,
            nav:true
        },
        480: {
            items: 2,
            nav:true
        },
        1200: {
            items: 3,
            nav:true
        }
    }
})

let searchwindow = document.querySelector("#searchwindow")
let searchplace = document.querySelector("#searchplace")
let allbody = document.querySelector("#allbody")
searchplace.addEventListener("click" ,function(e){
    console.log(e.target)
    if(e.target == searchplace) searchwindow.classList.toggle("d-none")
    
})