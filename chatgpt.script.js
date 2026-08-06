// ======================
// Dark / Light Mode
// ======================

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    toggleBtn.innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  }
  else{
    toggleBtn.innerHTML =
      '<i class="fa-solid fa-moon"></i>';
  }

});

// ======================
// Typing Animation
// ======================

const typing = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer",
  "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){

  currentWord = words[wordIndex];

  if(isDeleting){
    typing.textContent =
      currentWord.substring(0, charIndex--);
  }
  else{
    typing.textContent =
      currentWord.substring(0, charIndex++);
  }

  if(!isDeleting && charIndex === currentWord.length){
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if(isDeleting && charIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 120);
}

type();

// ======================
// Contact Form
// ======================

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e)=>{

  e.preventDefault();

  // Backend Example
  // Replace with your backend URL

  try{

    // Example API Call
    /*
    await fetch("YOUR_BACKEND_URL",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:form[0].value,
        email:form[1].value,
        message:form[2].value
      })
    });
    */

    message.innerHTML =
      "Message Sent Successfully ✅";

    message.style.color = "lightgreen";

    form.reset();

  }
  catch(error){

    message.innerHTML =
      "Something went wrong ❌";

    message.style.color = "red";
  }

});