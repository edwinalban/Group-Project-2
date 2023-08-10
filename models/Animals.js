const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

class Animals extends Model {};

Animals.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "animals",
    timestamps: false

});

module.exports = Animals;