const { Comment } = require('../models');

const commentsData = [
    {
        comment: "Whomping is sooooo cute!!!"
    },
    {
        comment: "I want Anya to win pet of the month."
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;

