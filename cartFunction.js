function init() {
    let remove = document.querySelector("#remove");
    let add = document.querySelector("#add");
    let numba = document.querySelector("#numba");
    let cartMain = document.querySelector("#cartMain");
    if (prodNumber == 0) {
        numba.innerHTML = 0;
        cartMain.innerHTML = "";
        cartMain.innerHTML = "<p>Lägg till en produkt i varukorgen först för att komma åt betalnings alternativ";
        cartMain.style.paddingBottom = "400px"
        cartMain.style.fontSize = "30px"
    }
    else {
        numba.innerHTML = prodNumber;
        add.addEventListener("click", plus);
        remove.addEventListener("click", subtract);
    }

}
window.addEventListener("load", init);

function plus(){
    prodNumber += 1;
    prodElem.innerHTML = prodNumber;
    numba.innerHTML = prodNumber;
    saveCart();
}

function subtract(){
    console.log("bruh")
    if(prodNumber == 1){
        return;
    }
    else{
        prodNumber -= 1;
        prodElem.innerHTML = prodNumber;
        numba.innerHTML = prodNumber;
        saveCart();
    }
}