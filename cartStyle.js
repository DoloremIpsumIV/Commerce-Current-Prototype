let prodNumber = 0;
let prodElem;
let storage = [];

function init() {
    const continueBtn = document.querySelector("#continue");
    if (continueBtn) {
        continueBtn.addEventListener("click", resetProdNumber);
    }
    prodElem = document.querySelector("#prodNummer");
    if (prodElem == null) {
        return;
    }
    getCart();
    prodElem.innerHTML = prodNumber;
    if (prodNumber == 0) {
        prodElem.style.display = "none";
    }
    // Set up the event listener for the "continue" button
    
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

function resetProdNumber() {
    prodNumber = 0;
    saveCart(); // Save the reset value to localStorage
}