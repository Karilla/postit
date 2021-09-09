const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class PostIt extends Model {}

PostIt.init(
  {
    type: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'postit',
  }
)

module.exports = PostIt
