/* IMAGE SLIDER */

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

setInterval(changeSlide, 4000);



/* POPUP FUNCTIONS */

function minimizePopup(){

document.getElementById("admissionPopup").classList.add("hidden");
document.getElementById("overlay").classList.add("hidden");

document.getElementById("popupButton").style.display = "block";

}


function openPopup(){

document.getElementById("admissionPopup").classList.remove("hidden");
document.getElementById("overlay").classList.remove("hidden");

document.getElementById("popupButton").style.display = "none";

}
