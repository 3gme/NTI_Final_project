
const data = [
    {
        img: "images/Shop – Merto/11-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 35
    },
    {
        img: "images/Shop – Merto/automotive-11-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 25

    },
    {
        img: "images/Shop – Merto/cosmetics-34-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 35

    },
    {
        img: "images/Shop – Merto/electronic-1-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/electronic-14-2-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/electronic-19-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/electronic-30-5-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/electronic-30-6-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 50
    },
    {
        img: "images/Shop – Merto/electronic-51-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/fashion-1-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 18

    },
    {
        img: "images/Shop – Merto/fashion-3-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 18
        
    },
    {
        img: "images/Shop – Merto/fashion-5-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/fashion-6-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: "154",
        sale: true,
        saleValue: 18
    },
    {
        img: "images/Shop – Merto/fashion-9-300x300.jpeg",
        link: "nike Air Max unisex systm men sneaker shoes",
        price: "148",
        oldprice: null,
        sale: false,
        saleValue: 18
    }
];


let area = document.querySelector("#Area")

const addNewElement = function(parent , type , text , href , source , classes ,sale){
    let element = document.createElement(type);
    parent.appendChild(element);
    if(text) element.textContent = text;
    if(href) element.href = href;
    if(source) element.src = source;
    if(classes) element.className = classes;
    return element;
}

//
/*
<div class="item col-4 border border-start-0 rounded-start-2">
    <div class="card position-relative border-0">
        <img src="images/cat-2.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <a href="#" class="link-item m-0 p-0">
                    <p class="lh-sm">TOOLS 34 Low Profile Hydraulic Trolley</p>
                </a>
                <div>
                    <span class="fw-bold fs-5">$767</span>
                    <span class="text-muted text-decoration-line-through">$837</span>
                </div>
            </div>
            <div class="cardhover">
                <button type="button" class="btn btn-secondary"><i class="fa-regular fa-heart"></i></button>
                <button type="button" class="btn btn-secondary"><i
                    class="fa-solid fa-code-compare"></i></button>
                <button type="button" class="btn btn-secondary"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
                <button type="button" class="btn btn-secondary"><i
                    class="fa-solid fa-cart-shopping"></i></button>

            </div>
    </div>
</div>
// */

const draw = function(){
    data.forEach(element => {
        let innerdiv = addNewElement(area , "div" , null , null ,null , "item col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6 border border-start-0 rounded-start-2")
        let card = addNewElement(innerdiv,"div" ,null,null,null,"card position-relative border-0")
        let image = addNewElement(card , "img" ,null ,null,element.img,"card-img-top")
        let cardbody = addNewElement(card,"div" ,null,null,null,"card-body")
        let anker=addNewElement(cardbody,"a",null,"#",null,"link-item m-0 p-0")
        let p=addNewElement(anker , "p" , element.link,null ,null ,"lh-sm")
        let div = addNewElement(cardbody,"div",null,null,null,null,null);
        let span = addNewElement(div,"span" ,element.price,null,null,"fw-bold fs-5")
        if(element.oldprice){
            span = addNewElement(div,"span" ,element.oldprice,null,null,"text-muted text-decoration-line-through ms-2")
        }
        let cardhover=addNewElement(card,"div",null,null,null,"cardhover")
        if(element.sale){
            div = addNewElement(card,"div",-element.saleValue,null,null,"discount")
        }
        let button=addNewElement(cardhover,"button",null,null,null,"btn btn-secondary")
        let icon = addNewElement(button,"i" ,null ,null ,null ,"fa-regular fa-heart")
        button=addNewElement(cardhover,"button",null,null,null,"btn btn-secondary d-xxl-block d-none")
        icon = addNewElement(button,"i" ,null ,null ,null ,"fa-solid fa-code-compare")
        button=addNewElement(cardhover,"button",null,null,null,"btn btn-secondary d-xxl-block d-none")
        icon = addNewElement(button,"i" ,null ,null ,null ,"fa-solid fa-magnifying-glass")
        button=addNewElement(cardhover,"button",null,null,null,"btn btn-secondary")
        icon = addNewElement(button,"i" ,null ,null ,null ,"fa-solid fa-cart-shopping")
    });
}


draw();