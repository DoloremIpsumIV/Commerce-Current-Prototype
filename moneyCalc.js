function init() {
   let prisElem = document.querySelectorAll(".priceTag");
   getCart();
   prisElem[0].innerHTML = "100kr frakt + " + (prodNumber * 299) + "kr för produkter";
   prisElem[1].innerHTML = "Ingen extra pris, " + (prodNumber * 299) + "kr för produkter"
   
}
window.addEventListener("load", init);