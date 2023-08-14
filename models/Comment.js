const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

class Comment extends Model {};

Comment.init ({
    comment:{
        type: DataTypes.STRING,   
    }
}, {
    sequelize,
    modelName: "commenting",
    timestamps: false

});

module.exports = Comment;