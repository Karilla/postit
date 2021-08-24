const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class TextPostIt extends Model {}

TextPostIt.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'text-postit',
  }
)

module.exports = TextPostIt
