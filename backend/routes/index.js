var express = require('express')
var router = express.Router()
var TextPostIt = require('../models/text-postit')

/* GET home page. */
router.get('/', function (req, res) {
  TextPostIt.findAll().then((data) => res.send(JSON.stringify(data, null, 2)))
})

/* POST All PostIt*/
router.post('/text-post', function (req, res) {
  var title = req.body['title']
  var data = req.body['data']
  console.log(req.body['title'])
  const test = TextPostIt.build({ title: title, data: data })

  test.save()
  res.send({ data: 'Data received gg to you' })
})

module.exports = router
