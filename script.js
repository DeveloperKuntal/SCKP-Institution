// IMAGE SLIDER

let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide,4000);



// POPUP SYSTEM

const popup = document.getElementById("admissionPopup");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closePopup");
const popupButton = document.getElementById("popupButton");


// CLOSE POPUP

closeBtn.addEventListener("click",function(){

popup.classList.add("hidden");
overlay.classList.add("hidden");

popupButton.style.display="block";

});


// OPEN POPUP AGAIN

popupButton.addEventListener("click",function(){

popup.classList.remove("hidden");
overlay.classList.remove("hidden");

popupButton.style.display="none";

});
