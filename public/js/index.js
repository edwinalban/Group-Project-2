const signupForm = document.querySelector('#signup-form');
const signupSubmission = document.querySelector('#signup-submit');
const loginForm = document.querySelector('#login-form');
const loginSubmitButton = document.querySelector('#login-submit');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  //get form info
  const formData = new FormData(signupForm);
  const email = formData.get('email-login');
  const password = formData.get('password-login');
  const confirmPassword = formData.get('confirm-password-login');

  try {

    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ email, password, confirmPassword }),
    });
    if (response.ok) {
      window.location.href = '/login'
    } else {
      const err = await response.text();
      console.error(err);
    }
  } catch (error) {
    console.error('An error has occurred, please try again later.', error);
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const email = formData.get('email-login');
  const password = formData.get('password-login');

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Successful login, redirect to homepage or desired route
      window.location.href = '/';
    } else {
      // Handle login error
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

//event listeners for cats only and dogs only buttons
const catsOnlyBtn = document.getElementById("cats-only-btn");
const dogsOnlyBtn = document.getElementById("dogs-only-btn");
const votingBtn = document.getElementById("voting-btn");

catsOnlyBtn.addEventListener("click", function(){
  document.location.href = '/allanimals/cat'; //not sure what the right endpoint is here. 
});

dogsOnlyBtn.addEventListener("click", function(){
  document.location.href = '/allanimals/dog';
});

//event listeners for voting buttons add to counter on click? 

// votingBtn.addEventListener("click", ) 
