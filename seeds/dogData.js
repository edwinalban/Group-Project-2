const { Dog } = require('../models');

const dogData = [
    {
        sex: "Male",
        breed: "Chihuahua",
        specialNeeds: "Really loves Halloween",
        age: 2,
        location: "Estacada,OR",
    },
    {
        sex: "Female",
        breed: "German Shepard",
        specialNeeds: "Bad hip",
        age: 8,
        location: "Hillsboro,OR",
    },
    {
        sex: "Female",
        breed: "German Shepard/Pitt",
        specialNeeds: "N/A",
        age: 8,
        location: "Ashland,OR",
    },
    {
        sex: "Male",
        breed: "Husky",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Beaverton,OR",
    }
]

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;