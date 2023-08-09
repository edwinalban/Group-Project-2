const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs'); // Import bcryptjs

class User extends Model {
  async setPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    this.password = hashedPassword;
  }

  async validatePassword(password) {
    return bcrypt.compare(password, this.password); 
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isLongEnough(value) {
        if (value.length < 8) {
          throw new Error('Password must be at least 8 characters long');
        }
      },
    },
  },
  isLoggedIn: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  catVote: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dogVote: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
  freezeTableName: true,
  underscored: true
});

// Hook to hash password before saving
User.beforeCreate(async (user) => {
  if (user.changed('password')) {
    await user.setPassword(user.password);
  }
});

module.exports = User;