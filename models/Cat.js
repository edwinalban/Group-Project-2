const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {};

Cat.init({
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    special_needs: {
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
    fav_users:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Cat',
    timestamps: false,
});

module.exports = Cat;