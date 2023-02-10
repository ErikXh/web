

// navbar
const menuBtn = document.getElementById("menubtn");
const navMenu = document.getElementById("navmenu");

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle("showMenu");
})

// Test carousel

const carouselImg = document.getElementById('carousel');

const images = [
'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

//carouselImg.style.background="url(link)";

// console.log(images[0]); the links are displayed in the console

// this function changes the image based on on the index of the array "images" above

 function changeImage(num){

 if(num == 0){
     carouselImg.style.background="url('" + images[0] + "')";
 }

 if(num == 1){
     carouselImg.style.background="url('" + images[1] + "')";
 }

 if(num == 2){
     carouselImg.style.background="url('" + images[2] + "')";
 }

 if(num > images.length){
     carouselImg.style.background="url('" + images[0] + "')";
 }

 if(num < 0){
     carouselImg.style.background="url('" + images[2] + "')";
 }

 }

// left/ right arrow events

const arrowLeft = document.querySelector(".move-left--js");
const arrowRight = document.querySelector(".move-right--js");

arrowRight.addEventListener('click', ()=>{
    changeImage(-1)
})

arrowLeft.addEventListener('click', ()=>{
    changeImage(+1)
})