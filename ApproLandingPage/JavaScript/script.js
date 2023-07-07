
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

const faqArrow = document.getElementById("faq-arrow");
const faqArrow2 = document.getElementById("faq-arrow-2");
const faqArrow3 = document.getElementById("faq-arrow-3");
const faqArrow4 = document.getElementById("faq-arrow-4");
const hiddenP = document.getElementById("hide-p");
const hiddenP2 = document.getElementById("hide-p2");
const hiddenP3 = document.getElementById("hide-p3");
const hiddenP4 = document.getElementById("hide-p4");

faqArrow.addEventListener("click", ()=>{
      if(hiddenP.classList.contains("hidden")){
        
        hiddenP.classList.remove("hidden"); 
        hiddenP.classList.add("open");
        //console.log("clicked"); 
      }else{
        hiddenP.classList.remove("open"); 
        hiddenP.classList.add("hidden");
      }
      
   })

faqArrow2.addEventListener("click", ()=>{
      if(hiddenP2.classList.contains("hidden")){
        
        hiddenP2.classList.remove("hidden"); 
        hiddenP2.classList.add("open");
        //console.log("clicked"); 
      }else{
        hiddenP2.classList.remove("open"); 
        hiddenP2.classList.add("hidden");
      }
      
   })

faqArrow3.addEventListener("click", ()=>{
      if(hiddenP3.classList.contains("hidden")){
        
        hiddenP3.classList.remove("hidden"); 
        hiddenP3.classList.add("open");
        console.log("clicked"); 
      }else{
        hiddenP3.classList.remove("open"); 
        hiddenP3.classList.add("hidden");
      }
      
   })

faqArrow4.addEventListener("click", ()=>{
      if(hiddenP4.classList.contains("hidden")){
        
        hiddenP4.classList.remove("hidden"); 
        hiddenP4.classList.add("open");
        console.log("clicked"); 
      }else{
        hiddenP4.classList.remove("open"); 
        hiddenP4.classList.add("hidden");
      }
      
   })
