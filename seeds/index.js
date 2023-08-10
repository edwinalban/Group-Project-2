const sequelize = require('../config/connection');
const { User, Animals, Cat, Dog } = require('../models');

const seedUsers = require('./userData');
const seedAnimals = require('./animalsData');
const seedCats = require('./catData');
const seedDogs = require('./dogData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); //syncs database

  await seedUsers(); //seeds data for each category
  await seedAnimals();
  await seedCats();
  await seedDogs();

  process.exit(0);
};

seedDatabase();
