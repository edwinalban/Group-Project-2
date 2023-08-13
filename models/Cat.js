const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {};

Cat.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    animalId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'animals',
            key: 'id',
        }
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
        allowNull: true,
    },
    voteCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
    },
    filename:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    petOfTheMonth: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'cat',
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = Cat;