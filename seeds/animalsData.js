const { Animals } = require('../models');

const animalsData = [
    {
        name: "Willow",
        age: 2,
        filename: "cat1.jpg"
    },
    {
        name: "Whomping",
        age: 1,
        filename: "cat2.jpg"
    },
    {
        name: "Wedge",
        age: 6,
        filename: "cat3.jpg"
    },
    {
        name: "Walter",
        age: 6,
        filename: "cat4.jpg"
    },
    {
        name: "Winston",
        age: 7,
        filename: "cat5.jpg"
    },
    {
        name: "Sir Podrick",
        age: 2,
        filename: "dog1.jpg"
    },
    {
        name: "Sisu",
        age: 8,
        filename: "dog2.jpg"
    },
    {
        name: "Sky",
        age: 8,
        filename: "dog3.jpg"
    },
    {
        name: "Anya",
        age: 6,
        filename: "dog4.jpg"
    }
];

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;