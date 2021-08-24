const { Sequelize } = require('sequelize')
const TextPostIt = require('../models/text-postit')

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite',
})

const syncModel = function syncModel() {
  TextPostIt.sync()
}
;(module.exports = sequelize), syncModel
