const router = require('express').Router();
const User = require('../models/User');
const AuthController = require('../controllers/auth');
router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});
router.post('/', async (req, res)=> {
  console.log("auth.js")
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    console.log(username);
    if (!user) {
      return res.status(401).json({ message: 'Incorrect Username or Password' });
    }

    const validPassword = await user.validatePassword(password);
   
    if (!validPassword) {
      console.log('Bcrypt compare result:', validPassword);
      return res.status(401).json({ message: 'Incorrect Username or Password' });
    }
    console.log('saving session')
   await req.session.save(() =>{
      req.session.isLoggedIn = true;
      console.log('session saved', req.session.isLoggedIn);
      res.status(200).json({ message: 'Login Successful!' });
    return 
  });
   
  

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error has occurred.' });
  }
  
});
module.exports = router