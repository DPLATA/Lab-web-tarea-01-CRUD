//Routes file

let router = require('express').Router()

let pagesController = require('../controllers/PagesControllers')

router.get('/homepage', pagesController.homepage)

router.get('/insert', pagesController.insertpage)

router.post('/insert', pagesController.insert)

router.get('/:id/update', pagesController.product)

router.post('/:id/update', pagesController.update)

router.get('/:id/delete', pagesController.deletepage)

router.post('/:id/delete', pagesController.delete)

router.get('/*', pagesController.homepage)

module.exports = router
