const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedAnimals = require('./animalsData');
const seedComments = require('./commentsData')

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); //syncs database

  await seedUsers(); //seeds data for each category
  await seedAnimals();
  await seedComments();

  process.exit(0);
};

seedDatabase();