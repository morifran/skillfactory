let offset= 0;
const sliderLine = document.querySelector(".slider-line");
const dot1 = document.getElementById ("fst");
const dot2 = document.getElementById ("scnd");
const dot3 = document.getElementById ("thrd");

document.querySelector("#fst").addEventListener("click", function(){
    offset = 0;
    sliderLine.style.left = -offset + "px";
    dot1.classList.add("activeDot");  
    dot2.classList.remove("activeDot");
    dot3.classList.remove("activeDot");
    console.log("button1");
});
document.querySelector("#scnd").addEventListener("click", function(){
    offset = 1113;
    sliderLine.style.left = -offset + "px";
    dot2.classList.add("activeDot");
    dot1.classList.remove("activeDot");
    dot3.classList.remove("activeDot");
    console.log("button2");
});
document.querySelector("#thrd").addEventListener("click", function(){
    offset = 2233;
    sliderLine.style.left = -offset + "px";
    dot3.classList.add("activeDot");
    dot2.classList.remove("activeDot");
    dot1.classList.remove("activeDot");
    console.log("button3");
});


document.addEventListener("DOMContentLoaded", function() {
    var buttons = ["fst", "scnd", "thrd"];
    var currentIndex = 0;
  
    function clickNextButton() {
      var buttonId = buttons[currentIndex];
      var button = document.getElementById(buttonId);
      button.click();
      currentIndex = (currentIndex + 1) % buttons.length; // Обеспечиваем цикличность действия
      setTimeout(clickNextButton, 5000); // Ждем 5 секунд перед нажатием следующей кнопки
    }
  
    clickNextButton(); // Запускаем первое нажатие сразу после загрузки страницы
  });
  
  
     