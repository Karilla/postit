var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/prout', function (req, res) {
  res.json({ username: 'Flavio' })
})

module.exports = router
