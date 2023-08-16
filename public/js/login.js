// const loginForm = document.querySelector('#login-form');
// const loginSubmitButton = document.querySelector('#login-submit');

// loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData(loginForm);
//     const username = formData.get('email-login');
//     const password = formData.get('password-login');
//     console.log(username, password);
  
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
  
//       if (response.ok) {
//         // Successful login, redirect to homepage or desired route
//         window.location.href = '/';
//       } else {
//         // Handle login error
//         const errorMessage = await response.text();
//         console.error(errorMessage);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   });

const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const email = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document.getElementById("login-form")
  .addEventListener('submit', loginFormHandler);
