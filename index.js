let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

}
themeButton.addEventListener("click", toggleDarkMode);

const form = document.getElementById('sign-petition');
const resultDiv = document.getElementById('result');
const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {

      petitionInputs[i].classList.remove('error');
    }
  }
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  }
  else {
      email.classList.remove('error');
  }
  const name = document.getElementById('name').value;

  
  if (containsErrors == false) {
    addSignature();
      openModal(name);

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

const addSignature = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const home = document.getElementById('home').value;

  const result = document.createElement('p');
  result.textContent = 'Thank You, ' + name + ' from ' + home + ' for your support!';

  resultDiv.appendChild(result);
  form.reset();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateForm();
});
// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("Modal");
var span = document.getElementsByClassName("close")[0];



span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

let scaleFactor = 1;
const scaleImage = () => {
  const modalImage = document.getElementById("modal-image"); //selects image in modal

 if (scaleFactor === 1){
  scaleFactor = 0.8; 
 }
  else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;

}
function openModal(name) {
   modal.style.display = "flex";
  const modalName = document.getElementById('modalName');
  modalName.innerText = name;
  const intervalId = setInterval(() => {scaleImage()}, 500);
  setTimeout( () => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}

let animation = {
revealDistance: 150,
initialOpacity: 0,
transitionDelay: 0,
transitionDuration: '2s',
transitionProperty: 'all',
transitionTimingFunction: 'ease',
}

let revealableContainers = document.querySelectorAll('.revealable');
const reveal = () => {
  //for every html element with the class revealable
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
 
}

window.addEventListener('scroll', reveal);