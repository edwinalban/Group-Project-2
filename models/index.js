const Animals = require('./Animals');
const Cat = require('./Cat');
const Dog = require('./Dog');
const User = require('./User')

// Set up relationships between models
Cat.belongsTo(Animals, {foreignKey: 'animalId'});
Dog.belongsTo(Animals, {foreignKey: 'animalId'});

module.exports = {
  Animals,
  Cat,
  Dog,
  User
};