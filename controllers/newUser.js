const User = require('../models/User');
const { hashPassword } = require('../helpers');

class newUser {
  static async signup(req, res) {
    try {
      const { username, password } = req.body;

      // Validate password length
      if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' });
      }

      // Hash the password using the helper function
      const hashedPassword = await hashPassword(password);

      // Create a new user with the hashed password
      await User.create({ username, password: hashedPassword });

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }

  // Other user-related actions (login, logout, etc.) can also be defined here
}

module.exports = newUser;