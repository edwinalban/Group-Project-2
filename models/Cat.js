const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {};

Cat.init({
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialNeeds: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    favUsers:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    voteCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Cat',
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = Cat;