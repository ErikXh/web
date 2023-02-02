
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

arrowLeft.addEventListener('click', ()=>{
    changeBackgroundImage(-1);
})

arrowRight.addEventListener('click', ()=>{
    changeBackgroundImage(+1)
})

const images = [
'C:\git\web\OutstaticaLandingPage\img\resized_team_image_test.jpg',
'C:\git\web\OutstaticaLandingPage\img\resized_team_image_test.jpg',
'C:\git\web\OutstaticaLandingPage\img\resized_team_image_test.jpg'
]


function changeBackgroundImage(num){

if(num < 0){
carouselImg.style.backgroundImage = images[2];
}

if(num == 0){
carouselImg.style.backgroundImage = images[0];
}

if(num == 1){
carouselImg.style.backgroundImage = images[1];
}

if(num == 2){
carouselImg.style.backgroundImage = images[2];
}
     
}