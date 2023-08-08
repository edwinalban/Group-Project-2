const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

class Animals extends Model {};

Animals.init ({
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
    modelName: Animals,
    timestamps: false

});

module.exports = Animals;