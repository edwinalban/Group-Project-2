const router = require('express').Router();

router.get('/allanimals', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('allAnimals');
});

module.exports = router;