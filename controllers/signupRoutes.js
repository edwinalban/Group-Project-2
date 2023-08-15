const router = require('express').Router();
const newUser = require('../controllers/newUser'); // Import newUser controller

// Render the sign-up page
router.get('/', async (req, res) => {
  res.render('signup');
});

// Handle user sign-up
router.post('/', async (req, res) => {
  try {
    const result = await newUser.signup(req, res);

    // If the signup was successful, redirect to the login page
    if (result.success) {
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;