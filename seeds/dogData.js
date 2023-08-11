const { Dog } = require('../models');

const dogData = [
    {
        animalId: 6,
        sex: "Male",
        breed: "Chihuahua",
        specialNeeds: "Really loves Halloween",
        age: 2,
        location: "Estacada,OR",
    },
    {
        animalId: 7,
        sex: "Female",
        breed: "German Shepard",
        specialNeeds: "Bad hip",
        age: 8,
        location: "Hillsboro,OR",
    },
    {
        animalId: 8,
        sex: "Female",
        breed: "German Shepard/Pitt",
        specialNeeds: "N/A",
        age: 8,
        location: "Ashland,OR",
    },
    {
        animalId: 9,
        sex: "Male",
        breed: "Husky",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Beaverton,OR",
    }
]

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;