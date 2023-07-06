
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

//test

const faqArrow = document.querySelectorAll("#faq-arrow");
const hiddenP = document.getElementById("hide-p");

faqArrow.forEach((e)=>{
   e.addEventListener("click", ()=>{
     // it does not work atm faqArrow.style.transform = "rotate(180deg)";
      if(hiddenP.classList.contains("hidden")){
        
        hiddenP.classList.remove("hidden"); 
        hiddenP.classList.add("open");
        //console.log("clicked"); 
      }else{
        hiddenP.classList.remove("open"); 
        hiddenP.classList.add("hidden");
      }
      
   })
})
