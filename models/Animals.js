const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

class Animals extends Model {};

Animals.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    animalType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    location:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    petOfTheMonth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }, 
    voteCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
    } 
}, {
    sequelize,
    modelName: "animals",
    timestamps: false

});

module.exports = Animals;