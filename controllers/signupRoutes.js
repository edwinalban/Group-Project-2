const router = require('express').Router();
const newUser = require('../controllers/newUser'); // Import newUser controller

// Render the sign-up page
router.get('/signup', async (req, res) => {
  res.render('signup');
});

// Handle user sign-up
router.post('/signup', async (req, res) => {
  try {
    await newUser.signup(req, res);

    // Redirect to the login page after successful sign-up
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;