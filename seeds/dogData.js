const { Dog } = require('../models');

const dogData = [
    {
        animalId: 6,
        name: "Sir Podrick",
        sex: "Male",
        breed: "Chihuahua",
        specialNeeds: "Really loves Halloween",
        age: 2,
        location: "Estacada,OR",
        filename: "dog1.jpg",
        description: "dog in witch costume",
        petOfTheMonth: false,
    },
    {
        animalId: 7,
        name: "Sisu",
        sex: "Female",
        breed: "German Shepard",
        specialNeeds: "Bad hip",
        age: 8,
        location: "Hillsboro,OR",
        filename: "dog2.jpg",
        description: "dog laying down",
        petOfTheMonth: false,
    },
    {
        animalId: 8,
        name: "Sky",
        sex: "Female",
        breed: "German Shepard/Pitt",
        specialNeeds: "N/A",
        age: 8,
        location: "Ashland,OR",
        filename: "dog3.jpg",
        description: "dog snuggling",
        petOfTheMonth: false,
    },
    {
        animalId: 9,
        name: "Anya",
        sex: "Male",
        breed: "Husky",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Beaverton,OR",
        filename: "dog4.jpg",
        description: "dog headshot",
        petOfTheMonth: false,
    }
]

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;