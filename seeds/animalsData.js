const { Animals } = require('../models');

const animalsData = [
    {
        name: "Willow",
        age: 2
    },
    {
        name: "Whomping",
        age: 1
    },
    {
        name: "Wedge",
        age: 6
    },
    {
        name: "Walter",
        age: 6
    },
    {
        name: "Winston",
        age: 7
    },
    {
        name: "Sir Podrick",
        age: 2
    },
    {
        name: "Sisu",
        age: 8
    },
    {
        name: "Sky",
        age: 8
    },
    {
        name: "Anya",
        age: 6
    }
];

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;