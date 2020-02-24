//Routes file

let router = require('express').Router()

let pagesController = require('../controllers/PagesControllers')

router.get('/products', pagesController.products)

router.get('/products/create', pagesController.create)

/*router.get('/products/:id', pagesController.retrieve)

router.put('/products/id', pagesController.update)

router.delete('/products/:id', pagesController.delete)*/

router.get('/*', pagesController.default)

module.exports = router
