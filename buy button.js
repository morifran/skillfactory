const buyBut = document.getElementsByClassName("buy");
var counterElement = document.querySelector(".header__section-counter-num");[0];
const redDot = document.getElementsByClassName("header__section-counter-dot")[0];
let count = 0;

for (let i = 0; i < buyBut.length; i++) {
    buyBut[i].addEventListener("click", () => {
        redDot.classList.remove("hidden");
        counterElement.classList.remove("hidden");
        count = count + 1;
        counterElement.innerHTML = count;
        if(count>9){
            counterElement.innerHTML = "9+";
        }
        console.log("красный кружок");
    });
}
