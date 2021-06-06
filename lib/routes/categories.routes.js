const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/categories.controller')

router.post('/', controller.create)
router.get('/',controller.get)
router.get('/one/:id',controller.getOne)
router.get('/alias/:alias',controller.getOneAlias)
router.patch('/edit/:id',controller.edit)
router.delete('/delete/:id',controller.delete)

module.exports = router