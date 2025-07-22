
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
/*
                    <!-- <div class="col-12 row border border-2 rounded-2 ">
                        <div class="col-3 position-relative">
                            <img src="images/Shop – Merto/cosmetics-34-300x300.jpeg" class="img-fluid">
                            <div class="discount2">
                                35
                            </div>
                        </div>
                        <div class="col-9 p-3 row">
                            <div class="col-6 card-body">
                                <a href="#" class="link-item fs-5">Nike Air max unisex system shoes</a>
                                <div class="fw-bold mt-2">
                                    <span>$price</span>
                                    <span>$old price</span>
                                </div>
                                <hr>
                                <ul class="list-unstyled">
                                    <li class=" ">
                                        → machine wash
                                    </li>
                                    <li class=" ">
                                        → machine wash
                                    </li>
                                    <li class=" ">
                                        → machine wash
                                    </li>
                                </ul>
                            </div>
                            <div class="col-5 p-3">
                                <button type="button" class="btn w-100 d-block">QUICK VIEW</button>
                                <button type="button" class="btn w-100 mt-2 d-block">+ADD TO CART</button>
                                <a href="#" class="link-item mute small-font fw-light">Add to wishlist</a>
                                <a href="#" class="link-item mute small-font fw-light ms-4">Add to compare</a>
                            </div>
                        </div> -->

*/


let area = document.querySelector("#Area")
let area2 = document.querySelector("#Area2")
let onlysale = document.querySelector("#onlysale");
let rectangles = document.querySelector("#rectangles");
let squares = document.querySelector("#squares")
let defaultscreen = true;
let res = data;
let showOnlySale = false;

const addNewElement = function(parent , type , text , href , source , classes ,sale){
    let element = document.createElement(type);
    parent.appendChild(element);
    if(text) element.textContent = text;
    if(href) element.href = href;
    if(source) element.src = source;
    if(classes) element.className = classes;
    return element;
}

const draw = function(){
    area.innerHTML=""
    res = showOnlySale ? data.filter(item => item.sale) : data; 
    res.forEach(element => {
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

const draw2 = function () {
    area2.innerHTML = "";
    res = showOnlySale ? data.filter(item => item.sale) : data;
    console.log(res);
    res.forEach(element => {
        let product = addNewElement(area2, "div", null, null, null, "col-12 row border border-2 rounded-2 mb-3");
        let imgWrapper = addNewElement(product, "div", null, null, null, "col-3 position-relative");
        addNewElement(imgWrapper, "img", null, null, element.img, "img-fluid");
        if (element.sale) {
            addNewElement(imgWrapper, "div", element.saleValue + "%", null, null, "discount2");
        }

        let detailsWrapper = addNewElement(product, "div", null, null, null, "col-9 p-3 row");

        let info = addNewElement(detailsWrapper, "div", null, null, null, "col-6 card-body");
        let a = addNewElement(info, "a", null, "#", null, "link-item fs-5");
        addNewElement(a, "p", element.link);

        let priceWrapper = addNewElement(info, "div", null, null, null, "fw-bold mt-2");
        addNewElement(priceWrapper, "span", "$" + element.price);
        if (element.oldprice) {
            addNewElement(priceWrapper, "span", "$" + element.oldprice, null, null, "text-muted text-decoration-line-through ms-2");
        }

        addNewElement(info, "hr");

        let ul = addNewElement(info, "ul", null, null, null, "list-unstyled");
        element.features?.forEach(feature => {
            addNewElement(ul, "li", "→ " + feature);
        });
        let actions = addNewElement(detailsWrapper, "div", null, null, null, "col-5 p-3");
        addNewElement(actions, "button", "QUICK VIEW", null, null, "btn w-100 d-block");
        addNewElement(actions, "button", "+ADD TO CART", null, null, "btn w-100 mt-2 d-block");

        let wishlist = addNewElement(actions, "a", "Add to wishlist", "#", null, "link-item mute small-font fw-light");
        let compare = addNewElement(actions, "a", "Add to compare", "#", null, "link-item mute small-font fw-light ms-4");
    });
};

onlysale.addEventListener("click",function(e){
        showOnlySale = !showOnlySale
        area.innerHTML=""
        area2.innerHTML=""
        defaultscreen? draw() :draw2();
    })
    
squares.addEventListener("click" , (e) =>{
    console.log(e)
    area2.innerHTML="";
    defaultscreen = true;
    draw();
})
rectangles.addEventListener("click" , (e) =>{
    console.log(e)
    area.innerHTML="";
    defaultscreen = false;
    draw2();
})

draw();





