var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    { name: 'Sherwin' },
    { name: 'Shav' },
    { name: 'Christian' },
    { name: 'Madhu' }
  ])
})

module.exports = router