const Animals = require('./Animals');
const Cat = require('./Cat');
const Dog = require('./Dog');

// Set up relationships between models
Cat.belongsTo(Animals);
Dog.belongsTo(Animals);

module.exports = {
  Animals,
  Cat,
  Dog,
};