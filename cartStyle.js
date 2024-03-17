let prodNumber = 0;
let prodElem;
let storage = [];
function init() {
    popupContent = document.querySelector("#popupContent")
    popup.classList.add("Hide");
    getCart();
    prodElem.innerHTML = prodNumber;
    if (prodNumber == 0) {
        prodElem.style.display = "none";
    }
}
window.addEventListener("load", init);


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