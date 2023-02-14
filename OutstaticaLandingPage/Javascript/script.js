

// navbar
const menuBtn = document.getElementById("menubtn");
const navMenu = document.getElementById("navmenu");

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle("showMenu");
})

// change color nav

let homeColor = document.getElementById("navigationbar");

function changeColorNav(){

if(window.scrollY < 40){
homeColor.classList.remove("home-color")
homeColor.classList.add("home-color-transparent"); 
}

if(window.scrollY > 40){
homeColor.classList.add("home-color")
homeColor.classList.remove("home-color-transparent"); 
}
}

let topBtn = document.getElementById("top-btn");

function backToTop(){
if(window.scrollY > 100){
topBtn.classList.remove("d-none")
topBtn.classList.add("d-block"); 
}

if(window.scrollY < 100){
topBtn.classList.add("d-none")
topBtn.classList.remove("d-block"); 
} 
}

topBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})

window.onscroll = function(){
    changeColorNav();
    backToTop();
}

// Test carousel

const carouselImg = document.getElementById('carousel');

const images = [
'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

// this function changes the image based on on the index of the array "images" above

let currentIndex = 2; // 2 is the index of the image that is visible initially

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

// "button not working" function
function inactive(){
    alert("This button doesn't do anything ... at the moment!")
}

const redBtns = document.querySelectorAll(".btn-red");

// this event listener does not work atm
redBtns.addEventListener('click', ()=>{
    inactive();
})