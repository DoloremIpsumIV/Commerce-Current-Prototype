let prodNumber = 0;
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
    let close = document.querySelector("#Close")
    popupContent = document.querySelector("#popupContent")

    purchase.addEventListener("click", productTab);
    ProdInfo.addEventListener("click", productTab);
    Review.addEventListener("click", productTab);
    close.addEventListener("click", closePopup);
    popup.classList.add("Hide");


}
window.addEventListener("load", init);



function productTab() {
    popup.classList.remove("Hide");
    popupContent.innerHTML = "";
    p.innerHTML = "";
    switch (this.id) {
        case "PurchaseButton":
            p.innerHTML = "Lades till i varukorg";
            popupContent.innerHTML = "";
            break;
        case "ProdInfo":
            p.innerHTML = "Produkt info:";
            break;
        case "Recensioner":
            p.innerHTML = "Recensioner:";
            break;
    }
}

function closePopup() {
    popup.classList.add("Hide");
}


//function saveCart() {
//    storage = JSON.stringify(hej);
//    localStorage.setItem("key", storage);
//}
//
//
//function getCart() {
//    let savedCart = localStorage.getItem("key");
//    if (savedCart !== null) {
//        hej = JSON.parse(savedCart);
//        hello();
//    }
//}