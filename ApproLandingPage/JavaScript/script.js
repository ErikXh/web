
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

//FAQ butons and hidden taxt
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
        faqArrow.classList.add("btn-rotate-180");
        hiddenP.classList.remove("hidden"); 
        hiddenP.classList.add("open");
        //console.log("clicked"); 
      }else{
        faqArrow.classList.remove("btn-rotate-180");
        hiddenP.classList.remove("open"); 
        hiddenP.classList.add("hidden");
      }
      
   })

faqArrow2.addEventListener("click", ()=>{
      if(hiddenP2.classList.contains("hidden")){
        faqArrow2.classList.add("btn-rotate-180");
        hiddenP2.classList.remove("hidden"); 
        hiddenP2.classList.add("open");
        //console.log("clicked"); 
      }else{
        faqArrow2.classList.remove("btn-rotate-180");
        hiddenP2.classList.remove("open"); 
        hiddenP2.classList.add("hidden");
      }
      
   })

faqArrow3.addEventListener("click", ()=>{
      if(hiddenP3.classList.contains("hidden")){
        faqArrow3.classList.add("btn-rotate-180");
        hiddenP3.classList.remove("hidden"); 
        hiddenP3.classList.add("open");
        //console.log("clicked"); 
      }else{
        faqArrow3.classList.remove("btn-rotate-180");
        hiddenP3.classList.remove("open"); 
        hiddenP3.classList.add("hidden");
      }
      
   })

faqArrow4.addEventListener("click", ()=>{
      if(hiddenP4.classList.contains("hidden")){
        faqArrow4.classList.add("btn-rotate-180");
        hiddenP4.classList.remove("hidden"); 
        hiddenP4.classList.add("open");
        //console.log("clicked"); 
      }else{
        faqArrow4.classList.remove("btn-rotate-180");
        hiddenP4.classList.remove("open"); 
        hiddenP4.classList.add("hidden");
      }
      
   })


   // test

 let faqContainer = document.getElementById('faq_container');

// faqContainer.addEventListener("click", (e)=> {
//   let tab = e.target;

   

//   console.log(tab)
// })


// change color of navigation bar

let nav = document.getElementById("nav");

// back to top button
const topBtn = document.getElementById("top-btn-js");

document.addEventListener('scroll', () => {
  nav.classList.toggle("bg-blue-400", window.scrollY > 30);
  if ((window.scrollY > 100) ? topBtn.classList.remove("hidden") : topBtn.classList.add("hidden"));
})

topBtn.addEventListener('click', ()=>{
  document.documentElement.scrollTop = 0;
})

// Reviews section

const employeeName = document.getElementById("name-js");
const employeePosition = document.getElementById("position-js");
const employeeQuote = document.getElementById("quote-js");

const reviewArray = [
   {
    name:"Mr. Doe",
    workPosition:"manager",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt rem velit laborum corporis voluptas repellendus possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   },
   {
    name:"Mr. John",
    workPosition:"Tech Lead",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi laborum corporis voluptas repellendus possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   },
   {
    name:"Mr. Newaz",
    workPosition:"creative director",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt rem velit laborum possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   },
   {
    name:"Mr. Zawen",
    workPosition:"team leader",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt rem velit laborum possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   },
   {
    name:"Mr. Erik",
    workPosition:"Developer",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt rem velit laborum possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   },
   {
    name:"Mr. Brown",
    workPosition:"team manager",
    quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt rem velit laborum possimus vero, iste laboriosam vitae, rerum fugiat dolorem."
   }
];

 employeeName.innerHTML = reviewArray[0].name;
 employeePosition.innerHTML = reviewArray[0].workPosition;
 employeeQuote.innerHTML = reviewArray[0].quote;

const qLeftArrow = document.getElementById("quote_arrow_left-js");
const qRightArrow = document.getElementById("quote_arrow_right-js");

let index = 0;

function changeQuote(){
    employeeName.innerHTML = reviewArray[index].name;
    employeePosition.innerHTML = reviewArray[index].workPosition;
    employeeQuote.innerHTML = reviewArray[index].quote;
}

qLeftArrow.addEventListener('click', ()=>{

  index = (index - 1 + reviewArray.length) % reviewArray.length;
  changeQuote()
  //console.log("clicked left " + index)
})

qRightArrow.addEventListener('click', ()=>{

  index = (index + 1) % reviewArray.length;
  changeQuote()
  //console.log("clicked " + index)
})

// form validation

const form = document.getElementById("contact_form");

form.addEventListener('submit', (e)=>{

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const txtArea = document.getElementById("txtarea").value;

  // if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !txtArea.value.trim()) {
  //   alert("Please fill out all required fields.");
  //   e.preventDefault();
  // }

  console.log(name, email, subject , txtArea);

  let data = e.serialize()

  console.log(data);

  // let xhr = new XMLHttpRequest()
  // xhr.open('POST', '#', true)
  // xhr.send(data)

  // xhr.onload = ()=> {
  //     if (xhr.status == 200) {
  //         alert("Form submited succesfully!")
  //     }

  //     if (xhr.status == 500) {
  //         alert("Form was not submited.")
  //     }
  // }
})
