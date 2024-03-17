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
            break;
        case "ProdInfo":
            p.innerHTML = "Produkt info:";
            popupContent.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
            break;
        case "Recensioner":
            p.innerHTML = "Recensioner:";
            popupContent.innerHTML = " <img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>2,1</p><img src='images/stjärna.png'></div>"
            popupContent.innerHTML += " <img src='images/datorntorn.jpg' alt='bild på dator torn'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>4,3</p><img src='images/stjärna.png'></div>"
            popupContent.innerHTML += " <img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>5</p><img src='images/stjärna.png'></div>"
            popupContent.innerHTML += " <img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took</p><div class='rating'><p>3</p><img src='images/stjärna.png'></div>"
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