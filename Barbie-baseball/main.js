let btns = document.querySelectorAll(".img-btn")
let imgs = document.querySelectorAll(".img-cover")
btns.forEach((btn , index) => {
    btn.addEventListener("click" , ()=>{
        imgs.forEach(img => img.classList.remove("active-img"));
        imgs[index].classList.add("active-img");

        btns.forEach(b=> b.classList.remove("active-btn"))
        btn.classList.add("active-btn");
    })
});



// number counter
const decrease = document.querySelector("#decrease")
const number = document.querySelector("#number")
const increase = document.querySelector("#increase")

decrease.addEventListener("click" , () => {
    if(number.textContent > 0)
    number.textContent --;
})
increase.addEventListener("click" , () => {
    if(number.textContent < 10)
    number.textContent ++;
})


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