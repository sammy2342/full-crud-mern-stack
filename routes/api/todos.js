const express = require('express')
const router = express.Router()
const todosCtrl = require('../../controllers/api/todos')

router.post('/', todosCtrl.create)

router.get('/', todosCtrl.index)

router.delete('/:id', todosCtrl.delete)

module.exports = router