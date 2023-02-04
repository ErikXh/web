
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

//  arrowLeft.addEventListener('click', ()=>{
//      changeBackgroundImage(-1);
//  })

// arrowRight.addEventListener('click', ()=>{
//     changeBackgroundImage(+1)
// })

const images = [
'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

//console.log(images[1])

arrowLeft.addEventListener('click', ()=>{
    carouselImg.style.backgroundImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
})





// function changeBackgroundImage(num){

// if(num < 0){
// carouselImg.style.backgroundImage = images[2];
// }

// if(num == 0){
// carouselImg.style.backgroundImage = images[0];
// }

// if(num == 1){
// carouselImg.style.backgroundImage = images[1];
// }

// if(num == 2){
// carouselImg.style.backgroundImage = images[2];
// }
     
// }