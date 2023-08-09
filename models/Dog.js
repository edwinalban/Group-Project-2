const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {};

Dog.init({
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
    modelName: 'Dog',
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = Dog;