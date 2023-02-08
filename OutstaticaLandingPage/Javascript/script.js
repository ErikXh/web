
// navbar
const menuBtn = document.getElementById("menubtn");
const navMenu = document.getElementById("navmenu");

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle("showMenu");
})

// Test carousel

const carouselImg = document.getElementById('carousel');
const arrowLeft = document.getElementsByClassName("move-left--js");
const arrowRight = document.getElementsByClassName("move-right--js");

const images = [
'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

//carouselImg.style.background="url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";

// console.log(images[0]); the links are displayed in the console

// this function changes the image based on on the index of the array "images" above

function changeImage(num){

let count = images[num];

for(i = 0; count <= images.length; i++){

carouselImg.style.backgroundImage = "url(images[i])";

if(num < 0){
    carouselImg.style.backgroundImage = "url(images[0])"; 
}
}
}

// left/ right arrow events

arrowLeft.addEventListener('click', ()=>{
    changeImage(-1);
})

arrowRight.addEventListener('click', ()=>{
    changeImage(+1);
})

// remove the nav links after click

const navLinks = document.getElementsByClassName("li")

function removeLinks(){
    navLinks.style.display = "none";
}

