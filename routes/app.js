//Routes file

let router = require('express').Router()

let pagesController = require('../controllers/PagesControllers')

router.get('/products', pagesController.products)

router.get('/products/:id', pagesController.product)

router.post('/products', pagesController.insert)

//router.put('/products/:id', pagesController.update)

router.delete('/products/:id', pagesController.delete)

router.get('/homepage', pagesController.homepage)

router.get('/*', pagesController.default)

module.exports = router
