const loginForm = document.querySelector('#login-form');
const loginSubmitButton = document.querySelector('#login-submit');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(loginForm);
    const username = formData.get('email-login');
    const password = formData.get('password-login');
    console.log(username, password);
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
  
      if (response.ok) {
        // Successful login, redirect to homepage or desired route
        window.location.href = '/landing';
      } else {
        // Handle login error
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });