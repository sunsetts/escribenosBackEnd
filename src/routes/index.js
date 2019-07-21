const router = require('express').Router()
const cors = require('cors')
router.use(cors())
const bodyParser = require('body-parser')

router.use(bodyParser.json()) // for parsing application/json

router.get('/', (req, res) => {
  res.send('Server Works')
})

module.exports = router
