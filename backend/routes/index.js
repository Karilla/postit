var express = require('express')
var router = express.Router()
var PostIt = require('../models/postit')

/* GET all post it. */
router.get('/', function (req, res) {
  PostIt.findAll().then((data) => {
    console.log(data.length)
    res.send(JSON.stringify(data, null, 2))
  })
})

/* POST Text PostIt*/
router.post('/text-post', function (req, res) {
  var title = req.body['title']
  var data = req.body['data']
  console.log(req.body['title'])
  const test = PostIt.build({ type: 'text', title: title, data: data })

  test.save()
  res.send({ data: 'Data received gg to you' })
})

/* DELETE text post it id */

router.get('/delete-text/:id', function (req, res) {
  console.log(`Delete post number ${req.params.id}`)
  PostIt.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send({ message: 'Successfully Deleted' })
    console.log('gg')
  })
})

/* PUT Text Post It content */

router.put('/modify-postit', function (req, res) {
  var id = req.body['id']
  var newTitle = req.body['newTitle']
  var newData = req.body['newData']
  console.log(id + ' ' + newTitle + ' ' + newData)
  PostIt.update(
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
