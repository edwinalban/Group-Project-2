const { Cat } = require('../models');

const catData = [
    {
        animalId: 1,
        name: "Willow",
        sex: "Female",
        breed: "Long Hair Tabby",
        specialNeeds: "Will only drink sparkling water. Allergic to kids.",
        age: 2,
        location: "Portland,OR",
        filename: "cat1.jpg",
        description: "cat standing in grass",
        petOfTheMonth: false,
        },
    {
        animalId: 2,
        name: "Whomping",
        sex: "Female",
        breed: "Calico",
        specialNeeds: "N/A",
        age: 1,
        location: "Astoria, OR",
        filename: "cat2.jpg",
        description: "cat sleeping on mug",
        petOfTheMonth: false,
        },
    {
        animalId: 3,
        name: "Wedge",
        sex: "Male",
        breed: "Short Hair",
        specialNeeds: "Thinks he is a bat.",
        age: 6,
        location: "Cottage Grove, OR",
        filename: "cat3.jpg",
        description: "cat with bat wings on",
        petOfTheMonth: false,
    },
    {
        animalId: 4,
        name: "Walter",
        sex: "Female",
        breed: "Short Hair",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Roseburg, OR",
        filename: "cat4.jpg",
        description: "cat hiding in bag",
        petOfTheMonth: true,
        },
    {
        animalId: 5,
        name: "Winston",
        sex: "Male",
        breed: "Long Hair Tabby",
        specialNeeds: "N/A",
        age: 7,
        location: "ForestGrove, OR",
        filename: "cat5.jpg",
        description: "cat headshot",
        petOfTheMonth: false,
        }
    
];

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;