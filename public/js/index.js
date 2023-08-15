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

// Voting button (not doing anything yet)
const votingBtn = document.getElementById("voting-btn");


//event listeners for voting buttons add to counter on click? 
const votingBtn = document.getElementById("voting-btn");
// votingBtn.addEventListener("click", ) 


//render comments
