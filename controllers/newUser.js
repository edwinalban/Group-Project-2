const User = require('../models/User');


class newUser {
  static async signup(req, res) {
    try {
      const { username, password } = req.body;

      // Validate password length
      if (!password || password.length < 8) {
        return { success: false, message: 'Password must be at least 8 characters long' };
      }

  
      // Create a new user with the hashed password
      await User.create({ username, password });

      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'An error occurred' };
    }
  }
}

module.exports = newUser;
