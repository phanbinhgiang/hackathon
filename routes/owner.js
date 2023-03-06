const express = require('express')
const router = express.Router()

const {
  getTasksByOwner,
} = require('../controllers/tasks')

router.route('/:owner').get(getTasksByOwner)


module.exports = router
