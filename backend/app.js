var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var cors = require('cors')
var logger = require('morgan')

var sequelize = require('./config/database')
sequelize.sync().then(() => console.log('Connected to db'))
//const TextPostIt = require('./models/text-postit')

var indexRouter = require('./routes/index')

var app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/')
{
  console.log('cc')
}

app.use('/api', indexRouter)

module.exports = app
