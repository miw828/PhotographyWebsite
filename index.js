
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button"); 

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); 


}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/
const rsvpButton = document.getElementById('rsvp-button');
const rsvpForm = document.getElementById("rsvp-form");
const participantsDiv = document.getElementById("rsvp-participants");

function addParticipant(person){

    const nameInput = document.getElementById("rsvp-name");
    const emailInput = document.getElementById("rsvp-email");
    const cityInput = document.getElementById("rsvp-city");

    

    const newP = document.createElement("p");
    newP.textContent = `🎟️ ${person.nameInput} from ${person.cityInput} is interested in booking a session!`;
    participantsDiv.appendChild(newP);

   nameInput.value = '';
  emailInput.value = '';
  cityInput.value = '';
};

// rsvpButton.addEventListener('click', addParticipant);

function validateForm() {
    let rsvpInputs = rsvpForm.elements; 
    let person = {
        name: rsvpInputs[0].value.trim(),
        email: rsvpInputs[1].value.trim(),
        city: rsvpInputs[2].value.trim()
    };

    // Simple validation: all fields must have at least 2 chars
    let containsErrors = false;
    if (person.name.length < 2) containsErrors = true;
    if (person.email.length < 2) containsErrors = true;
    if (person.city.length < 2) containsErrors = true;

    if (!containsErrors) {
        addParticipant(person); // pass object
        toggleModal(person);    // show modal on valid RSVP
    }
    // else: do nothing (modal does not appear)
}

// Instead of handling the click on the button, handle the form submit
rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

// Modal animation logic
let rotateFactor = 0;
let modalImage = document.getElementById("modal-image");
let intervalId = null;

function animateImage() {
    if (!modalImage) modalImage = document.getElementById("modal-image");
    rotateFactor = (rotateFactor === 0) ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

function toggleModal(person) {
    const modal = document.getElementById("success-modal");
    const modalText = document.getElementById("modal-text");
    modal.style.display = "flex";
    modalText.textContent = `Thanks for booking! ${person.name}! We can't wait to see you at your photoshoot!`;

    // this will start the animation 
    intervalId = setInterval(animateImage, 500);

    // this hides it 
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
        if (modalImage) modalImage.style.transform = "rotate(0deg)";
    }, 5000);
}
