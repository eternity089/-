let header = document.querySelector("header")
    window.onscroll = function(){
        
if(window.scrollY > 1000){
    header.style.background = "rgba(70, 105, 155, 0.50)"
}};

document.addEventListener("DOMContentLoaded", function () {
  const buttonUp = document.getElementById("button-up");


  buttonUp.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});