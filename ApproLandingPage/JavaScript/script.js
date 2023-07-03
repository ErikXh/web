
// navbar menu functionality
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", ()=>{

   sideMenu.classList.toggle('open');
   sideMenu.classList.toggle('hidden');
});

// navigation bar disapears after click

const links = document.querySelectorAll(".mini-nav-links-js");

links.forEach((e)=>{
   e.addEventListener("click", ()=>{
      sideMenu.classList.add('hidden');
   })
})