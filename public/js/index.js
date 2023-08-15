const signupForm = document.querySelector('#signup-form');
const signupSubmission = document.querySelector('#signup-submit');
const loginForm = document.querySelector('#login-form');
const loginSubmitButton = document.querySelector('#login-submit');
const username = signupForm.querySelector('#email-login').value;
const password = signupForm.querySelector('#password-login').value;
const confirmPassword = signupForm.querySelector('#confirm-password-login').value;

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form info
  const formData = new FormData(signupForm);
  const username = formData.get('email-login'); // Update with the correct input name for username
  const password = formData.get('password-login');
  const confirmPassword = formData.get('confirm-password-login');
  console.log(username, password, confirmPassword);

  // Validate passwords
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = '/login';
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  } catch (error) {
    console.error('An error has occurred:', error);
  }
});

// loginForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(loginForm);
//   const username = formData.get('email-login');
//   const password = formData.get('password-login');
//   console.log(username, password,);

//   try {
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       // Successful login, redirect to homepage or desired route
//       window.location.href = '/';
//     } else {
//       // Handle login error
//       const errorMessage = await response.text();
//       console.error(errorMessage);
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// });

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
