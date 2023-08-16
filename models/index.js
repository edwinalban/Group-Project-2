const Animals = require('./Animals');
// const Cat = require('./Cat');
// const Dog = require('./Dog');
const User = require('./User');
const Comment = require('./Comment');

// Set up relationships between models
// Cat.belongsTo(Animals, {foreignKey: 'animal_id'});
// Dog.belongsTo(Animals, {foreignKey: 'animal_id'});
// Animals.hasMany(Cat, {foreignKey: 'animal_id'});
// Animals.hasMany(Dog, {foreignKey: 'animal_id'});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {
  Animals,
  // Cat,
  // Dog,
  User,
  Comment
};