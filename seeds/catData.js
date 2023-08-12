const { Cat } = require('../models');

const catData = [
    {
        animalId: 1,
        sex: "Female",
        breed: "Long Hair Tabby",
        specialNeeds: "Will only drink sparkling water. Allergic to kids.",
        age: 2,
        location: "Portland,OR",
        filename: "cat1.jpg",
        description: "cat standing in grass",
        },
    {
        animalId: 2,
        sex: "Female",
        breed: "Calico",
        specialNeeds: "N/A",
        age: 1,
        location: "Astoria, OR",
        filename: "cat2.jpg",
        description: "cat sleeping on mug",
        },
    {
        animalId: 3,
        sex: "Male",
        breed: "Short Hair",
        specialNeeds: "Thinks he is a bat.",
        age: 6,
        location: "Cottage Grove, OR",
        filename: "cat3.jpg",
        description: "cat with bat wings on",

    },
    {
        animalId: 4,
        sex: "Female",
        breed: "Short Hair",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Roseburg, OR",
        filename: "cat4.jpg",
        description: "cat hiding in bag",
        },
    {
        animalId: 5,
        sex: "Male",
        breed: "Long Hair Tabby",
        specialNeeds: "N/A",
        age: 7,
        location: "ForestGrove, OR",
        filename: "cat5.jpg",
        description: "cat headshot",
        }
    
];

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;