const { User } = require('../models');

const userData = 
[
    {
        "username": "testuser",
        "password": "password",
        "isLoggedIn:": "false",
        "catVote": "false",
        "dogVote": "false"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;