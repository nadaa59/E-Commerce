let cartIcon = document.getElementById("cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.getElementById("close");
let list = document.querySelector(".list");
let cartList = document.querySelector(".cart-list");
let prod=document.querySelector(".products")
let contentss = document.getElementById("contentss");
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total-price");
let menu = document.getElementById("menu")
let ul = document.querySelector(".ul");
let nav = document.querySelector(".nav")

let isMenuVisible = false;

menu.addEventListener("click", () => {
    if (isMenuVisible) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
    isMenuVisible = !isMenuVisible;
});

let check = document.getElementById("check")
let form = document.getElementById("form")
let btn = document.getElementById("btn")
let cont = document.querySelector(".containerr")
let close = document.getElementById("closeCart")


check.onclick = function () {
    cont.style.display = "block"
};
close.onclick = function(){
    cont.style.display = "none"
}
cartIcon.addEventListener("click", () => {
    
    cart.classList.add("active")
    console.log("done")
});
closeCart.addEventListener("click", () => {
    cart.classList.remove("active")
});

let products = [
    {
        id: 1,
        image: "4.avif",
        title: "Gift Pack With 3 Pieces ",
        price: 150

    },
    {
        id: 2,
        image: "5.avif",
        title: "Gift Box With 8 Pieces ",
        price: 210

    },
    {
        id: 3,
        image: "6.avif",
        title: "Gift Box With 16 Pieces",
        price: 175

    },
    {
        id: 4,
        image: "78.avif",
        title: "Gift Box With 24 Pieces ",
        price: 600

    },
    {
        id: 5,
        image: "88.avif",
        title: "Gift Box With 30 Pieces ",
        price: 650

    },
    {
        id: 6,
        image: "66.avif",
        title: "Gift Box With 42 Pieces",
        price: 1700

    },
    {
        id: 7,
        image: "4.avif",
        title: "Gift Pack With 3 Pieces ",
        price: 150

    },
    {
        id: 8,
        image: "5.avif",
        title: "Gift Box With 8 Pieces ",
        price: 210

    },
    {
        id: 9,
        image: "12.avif",
        title: "Chocolate With  Caramel",
        price: 100

    },
    {
        id: 10,
        image: "14.avif",
        title: "Chocolate With Hazelnut ",
        price: 160

    },
    {
        id: 11,
        image: "13.avif",
        title: "Chocolate With Almond",
        price: 175

    },
    {
        id: 12,
        image: "11.avif",
        title: "Chocolate With Milk",
        price: 100

    },
    {
        id: 13,
        image: "77.avif",
        title: "Ferrero Rocher Triple ",
        price: 100

    },
    {
        id: 14,
        image: "55.avif",
        title: "Ferrero Rocher Dark",
        price: 100

    },
    {
        id: 15,
        image: "99.avif",
        title: "Ferrero Rocher White",
        price: 100

    },
    {
        id: 16,
        image: "77.avif",
        title: "Ferrero Rocher Classic",
        price: 100

    },
    {
        id: 17,
        image: "99.avif",
        title: "Ferrero Rocher Triple ",
        price: 100

    },
    {
        id: 18,
        image: "55.avif",
        title: "Ferrero Rocher Dark",
        price: 100

    },
    {
        id: 18,
        image: "77.avif",
        title: "Ferrero Rocher Classic",
        price: 100

    },
    {
        id: 20,
        image: "99.avif",
        title: "Ferrero Rocher White",
        price: 100

    },
   

]

let listCards=[];

function initApp(){
    products.forEach((value)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("product-box")
        newDiv.innerHTML=`
        <img src="${value.image}">
        <h2>${value.title}</h2>
        <span>${value.price} EG</span>
        <button onclick="addToCart(${value.id})">Add To Cart</button>
        
        `;
        contentss.appendChild(newDiv);
    })
}
initApp();
function addToCart(id){
    let product = products.find((p)=> p.id ===id);
    let productIndex = listCards.findIndex((p) => p.id === id);
    
    if (productIndex > -1){
        listCards[productIndex].quantity += 1;
    } 
    else{
        listCards.push({ ...product, quantity: 1 });
    }
    
    reloadCard();
}
function reloadCard(){
    cartList.innerHTML ="";
    let totalPirce = 0;
    let count =0;
    listCards.forEach((value) =>{
        totalPirce += value.price * value.quantity;
        count +=value.quantity;
        let newLi = document.createElement("li");
        newLi.classList.add("box");
        newLi.innerHTML=`
        <div> <img src="${value.image} "></div>
        <div class="title"> ${value.title} </div>
        <div class="span"> <span>${value.price} EG</span> </div>
        <div class="change">
           <button id="plus" onclick="changeQuantity(${value.id}, ${value.quantity + 1})">  +  </button>
           <div> ${value.quantity} </div>
           <buuton id="minus" class="btn" onclick="changeQuantity(${value.id}, ${value.quantity - 1})">  -  </button>
        
        
        </div>

        `;
        cartList.appendChild(newLi); 

    });
    total.innerHTML = totalPirce +" EG";
    quantity.innerHTML = count;
    localStorage.setItem("product" , JSON.stringify(listCards));
}
function changeQuantity(id, newQuantity){
    let productIndex = listCards.findIndex((p)=>p.id ===id);
    if(newQuantity === 0){
        listCards.splice(productIndex, 1);
    }else{
        listCards[productIndex].quantity = newQuantity;

    }
    reloadCard();
}


if (localStorage.product != null){
    listCards =JSON.parse(localStorage.product);

}

getProductLocalStorage();

function getProductLocalStorage(){
    localStorage.getItem("product");
    reloadCard();
}


