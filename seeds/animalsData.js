const { Animals } = require('../models');

const animalsData = [
    {
        name: "Fluffy",
        age: 2
    },
    {
        name: "Fluffy2",
        age: 2
    },
    {
        name: "Fluff3y",
        age: 2
    },
    {
        name: "Fluffy4",
        age: 2
    },
    {
        name: "Fluffy5",
        age: 2
    },
    {
        name: "Fluffy9",
        age: 2
    },
    {
        name: "Fluffy6",
        age: 2
    },
    {
        name: "Fluffy7",
        age: 2
    },
    {
        name: "Fluffy8",
        age: 2
    }
];

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;