const router = require('express').Router();
const AuthController = require('../controllers/auth');
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});
router.post('/', AuthController.login);
module.exports = router