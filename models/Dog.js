const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model {};

Dog.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false,
    },
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