const router = require('express').Router();

router.get('/landing', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('landing');
});

module.exports = router;