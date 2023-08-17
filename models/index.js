const Animals = require('./Animals');
const User = require('./User');
const Comment = require('./Comment');

// Set up relationships between models


Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {
  Animals,
  User,
  Comment
};