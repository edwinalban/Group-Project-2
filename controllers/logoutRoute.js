const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    if (req.session.isLoggedIn) {
      // Destroy the session and log the user out
      req.session.destroy(err => {
        if (err) {
          console.error('Error destroying session:', err);
        } else {
          // Redirect to the login page after logging out
          res.redirect('/login');
        }
      });
    } else {
      // User is not logged in, so just redirect to the login page
      res.redirect('/login');
    }
  } catch (error) {
    console.error('Error logging out:', error);
    res.redirect('/'); // Redirect to an appropriate error page
  }
});

module.exports = router;
