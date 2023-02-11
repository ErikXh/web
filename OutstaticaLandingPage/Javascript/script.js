

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

// this function changes the image based on on the index of the array "images" above

let currentIndex = 2;

function right(){
if(currentIndex == 2){
currentIndex = 0;
}
else{
currentIndex++;
}
carouselImg.style.backgroundImage="url('" + images[currentIndex] + "')";
}

function left(){
if(currentIndex == 0){
currentIndex = 2;
}
else{
currentIndex--;
}
carouselImg.style.backgroundImage="url('" + images[currentIndex] + "')";
}

const arrowLeft = document.querySelector(".move-left--js");
const arrowRight = document.querySelector(".move-right--js");

arrowRight.addEventListener('click', ()=>{
    right();
})

arrowLeft.addEventListener('click', ()=>{
    left();
})