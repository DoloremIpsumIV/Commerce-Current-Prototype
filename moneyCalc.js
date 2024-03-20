function init() {
   let prisElem = document.querySelectorAll(".priceTag");
   getCart();
   if (prisElem.length >= 1){
      prisElem[0].innerHTML = "100kr frakt + " + (prodNumber * 299) + "kr för produkter";
      prisElem[1].innerHTML = "Ingen extra pris, " + (prodNumber * 299) + "kr för produkter"
      return;
   }
   if (!prisElem.length >= 1) {
      let price = document.querySelector("#price");
      price.innerHTML = "Pris: " + prodNumber * 299 + "kr";
   }


}
window.addEventListener("load", init);