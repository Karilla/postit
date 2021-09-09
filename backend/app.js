var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var cors = require('cors')
var logger = require('morgan')

var sequelize = require('./config/database')

var postIt = require('./models/postit')

sequelize.sync().then(() => console.log('Connected to db'))

postIt.sync()

var indexRouter = require('./routes/index')

var app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', indexRouter)

module.exports = app
