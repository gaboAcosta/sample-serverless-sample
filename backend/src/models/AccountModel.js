
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const model = sequelize.define('Account', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },
  {
    underscored: true
  })
  return model
}
