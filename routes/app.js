//Routes file

let router = require('express').Router()

let pagesController = require('../controllers/PagesControllers')

router.get('/', pagesController.homepage)

router.get('/Create', pagesController.create)

router.get('/Retrieve', pagesController.retrieve)

router.get('/Update', pagesController.update)

router.get('/Delete', pagesController.delete)

router.get('/*', pagesController.default)

module.exports = router
