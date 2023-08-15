const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(password, hashedPassword);
  return hashedPassword;
}

module.exports = {
  hashPassword
};