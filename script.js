let prodNumber = 0;
let prodElem;
let storage = [];
let popup;
let popupContent;
let p;

let purchase;
let ProdInfo;
let Review
let close;
const bruh = document.getElementsByTagName("a");


function init() {
    p = document.querySelector("#hell");
    purchase = document.querySelector("#PurchaseButton");
    ProdInfo = document.querySelector("#ProdInfo");
    Review = document.querySelector("#Recensioner");
    popup = document.querySelector("#Popup");
    prodElem = document.querySelector("#prodNummer");
    close = document.querySelector("#Close")
    popupContent = document.querySelector("#popupContent")

    purchase.addEventListener("click", productTab);
    purchase.addEventListener("keydown", productTab);
    ProdInfo.addEventListener("click", productTab);
    Review.addEventListener("click", productTab);
    ProdInfo.addEventListener("keydown", productTab);
    Review.addEventListener("keydown", productTab);
    close.addEventListener("click", closePopup);
    close.addEventListener("keydown", closePopup);
    popup.classList.add("Hide");
    getCart();
    prodElem.innerHTML = prodNumber;
    if (prodNumber == 0) {
        prodElem.style.display = "none";
    }

}
window.addEventListener("load", init);


function productTab(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {

        Review.tabIndex = -1;
        purchase.tabIndex = -1;
        ProdInfo.tabIndex = -1;
        purchase.firstElementChild.tabIndex = -1;
        Array.from(document.getElementsByTagName("footer")[0].children).forEach(element => {
            element.tabIndex = -1;
        });


        popup.classList.remove("Hide");
        popupContent.innerHTML = "";
        popup.style.paddingBottom = "400px"
        p.innerHTML = "";
        switch (this.id) {
            case "PurchaseButton":
                p.innerHTML = "Lades till i varukorg";
                popupContent.innerHTML = "<div id='glog'><a href='products.html'<div id='PurchaseButton'><button type='button'><p>Fortsätt handla</p></button></a> <a href='cart.html'<div id='PurchaseButton'><button type='button'><p>Till varukorgen</p></button></a></div>"
                prodNumber++;
                prodElem.innerHTML = prodNumber;
                prodElem.style.display = "inline";
                saveCart();
                break;
            case "ProdInfo":
                p.innerHTML = "Produkt info:";
                popup.style.paddingBottom = "200px"
                popupContent.innerHTML = "<p id='prodinfocss'>Elevate your cooking skills with our comprehensive cookbook designed specifically for students. Whether you're a novice in the kitchen or looking to expand your culinary repertoire, this book has everything you need to whip up tasty and nutritious meals on a student budget. From quick and simple recipes for busy weekdays to impressive dishes for entertaining friends, each recipe is carefully crafted with affordability, convenience, and flavor in mind. With step-by-step instructions and helpful tips on meal planning, grocery shopping, and kitchen essentials, cooking has never been easier or more enjoyable. Say goodbye to boring microwave dinners and hello to culinary excellence with our student-friendly cookbook. </p>"
                break;
            case "Recensioner":
                popup.style.paddingBottom = "50px"
                p.innerHTML = "Recensioner:";
                popupContent.innerHTML = " <img><p>As a busy student with little cooking experience, this cookbook has been a lifesaver! The recipes are easy to follow, and the ingredients are affordable. I've already impressed my friends with several dishes.</p><div class='rating'><p>4,1</p><img src='images/stjärna.png'></div>"
                popupContent.innerHTML += " <img src='images/Cook_book.jpg' alt='bild på dator torn'><p>This cookbook is a game-changer for anyone living on a tight budget. The recipes are delicious, and I love how they include tips on saving money while grocery shopping.</p><div class='rating'><p>4,3</p><img src='images/stjärna.png'></div>"
                popupContent.innerHTML += " <img><p>I'm not the most confident cook, but this cookbook has given me the skills and confidence to experiment in the kitchen. The recipes are clear and concise, and I appreciate the variety of dishes included.</p><div class='rating'><p>5</p><img src='images/stjärna.png'></div>"
                break;
        }
    }
}

function closePopup(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
        popup.classList.add("Hide");
        Review.tabIndex = 0;
        purchase.tabIndex = 0;
        purchase.firstElementChild.tabIndex = 0;
        ProdInfo.tabIndex = 0;
        Array.from(document.getElementsByTagName("footer")[0].children).forEach(element => {
            element.tabIndex = 0;
        });
    }
}

function saveCart() {
    storage = JSON.stringify(prodNumber);
    localStorage.setItem("key", storage);
}


function getCart() {
    let savedCart = localStorage.getItem("key");
    if (savedCart !== null) {
        prodNumber = JSON.parse(savedCart);
    }
}