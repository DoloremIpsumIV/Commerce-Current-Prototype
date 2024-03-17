let prodNumber = 0;
let prodElem;
let storage = [];
let popup;
let popupContent;
let p;
function init() {
    p = document.querySelector("#hell");
    let purchase = document.querySelector("#PurchaseButton");
    let ProdInfo = document.querySelector("#ProdInfo");
    let Review = document.querySelector("#Recensioner");
    popup = document.querySelector("#Popup");
    prodElem = document.querySelector("#prodNummer");
    let close = document.querySelector("#Close")
    popupContent = document.querySelector("#popupContent")

    purchase.addEventListener("click", productTab);
    ProdInfo.addEventListener("click", productTab);
    Review.addEventListener("click", productTab);
    close.addEventListener("click", closePopup);
    popup.classList.add("Hide");
    getCart();
    prodElem.innerHTML = prodNumber;
    if (prodNumber == 0) {
        prodElem.style.display = "none";
    }

}
window.addEventListener("load", init);



function productTab() {
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
            popupContent.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
            break;
        case "Recensioner":
            popup.style.paddingBottom = "50px"
            p.innerHTML = "Recensioner:";
            popupContent.innerHTML = " <img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>2,1</p><img src='images/stjärna.png'></div>"
            popupContent.innerHTML += " <img src='images/bok.jpg' alt='bild på dator torn'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>4,3</p><img src='images/stjärna.png'></div>"
            popupContent.innerHTML += " <img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>5</p><img src='images/stjärna.png'></div>"
            break;
    }
}

function closePopup() {
    popup.classList.add("Hide");
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