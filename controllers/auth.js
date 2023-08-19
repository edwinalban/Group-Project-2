const User = require('../models/User');


class AuthController {
   async login(req, res) {
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
      req.session.save(() =>{
        req.session.isLoggedIn = true;
      });
      console.log('session saved', req.session);

      res.status(200).json({ message: 'Login Successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error has occurred.' });
    }
    res.render('/login');
  }
}

module.exports = AuthController;