const { Dog } = require('../models');

const dogData = [
    {
        animalId: 6,
        sex: "Male",
        breed: "Chihuahua",
        specialNeeds: "Really loves Halloween",
        age: 2,
        location: "Estacada,OR",
        filename: "dog1.jpg",
        description: "dog in witch costume",
    },
    {
        animalId: 7,
        sex: "Female",
        breed: "German Shepard",
        specialNeeds: "Bad hip",
        age: 8,
        location: "Hillsboro,OR",
        filename: "dog2.jpg",
        description: "dog laying down",
    },
    {
        animalId: 8,
        sex: "Female",
        breed: "German Shepard/Pitt",
        specialNeeds: "N/A",
        age: 8,
        location: "Ashland,OR",
        filename: "dog3.jpg",
        description: "dog snuggling",
    },
    {
        animalId: 9,
        sex: "Male",
        breed: "Husky",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Beaverton,OR",
        filename: "dog4.jpg",
        description: "dog headshot",
    }
]

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;