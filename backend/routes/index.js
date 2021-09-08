var express = require('express')
var router = express.Router()
var TextPostIt = require('../models/text-postit')

/* GET all post it. */
router.get('/', function (req, res) {
  TextPostIt.findAll().then((data) => {
    console.log(data.length)
    res.send(JSON.stringify(data, null, 2))
  })
})

/* POST Text PostIt*/
router.post('/text-post', function (req, res) {
  var title = req.body['title']
  var data = req.body['data']
  console.log(req.body['title'])
  const test = TextPostIt.build({ title: title, data: data })

  test.save()
  res.send({ data: 'Data received gg to you' })
})

/* DELETE text post it id */

router.get('/delete-text/:id', function (req, res) {
  console.log(`Delete post number ${req.params.id}`)
  TextPostIt.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send({ message: 'Successfully Deleted' })
    console.log('gg')
  })
})

router.put('/modify-postit', function (req, res) {
  var id = req.body['id']
  var newTitle = req.body['newTitle']
  var newData = req.body['newData']
  console.log(id + ' ' + newTitle + ' ' + newData)
  TextPostIt.update(
    {
      title: newTitle,
      data: newData,
    },
    {
      where: {
        id: id,
      },
    }
  )
  res.send({ message: 'CACA DANS LES RAVIOLIS' })
})

module.exports = router
