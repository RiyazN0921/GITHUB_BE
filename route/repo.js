const express = require('express')

const router = express.Router()

const controller = require('../controller/repo')

router.post('/create', controller.create)

router.get('/all', controller.getAll)

router.get('/getAll', controller.getAllPage)

router.get('/:id', controller.getById)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router
