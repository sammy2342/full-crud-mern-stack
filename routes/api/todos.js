const express = require('express')
const router = express.Router()
const todosCtrl = require('../../controllers/api/todos')

router.post('/', todosCtrl.create)

module.exports = router