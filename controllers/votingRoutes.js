const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('voting');
});

//Post route for adding vote to counter

module.exports = router;