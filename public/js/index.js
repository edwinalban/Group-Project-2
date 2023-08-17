const signoutButton = document.getElementById('signout-submit');

signoutButton.addEventListener('click', async (e) => {
  e.preventDefault();

  try {
    
    const response = await fetch('/logout', {
      method: 'POST',
      credentials: 'include' // Include credentials (cookies) in the request
    });

    if (response.ok) {
      // Redirect to the login page after successful logout
      window.location.href = '/login';
    } else {
      // Handle logout error
      console.error('Error logging out');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
