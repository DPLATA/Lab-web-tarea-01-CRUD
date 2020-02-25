let ProductModel = require('../models/Product')

exports.products = (req, res) => {
  ProductModel.all()
  .then((data) => {
    let products = data
    console.log(products)
    //sigue sin funcionar la vista
    res.render('pages/products', { products: products })
  })
}

exports.product = (req, res) => {
  ProductModel.one(req.params.id).then((data) => {
    let product = data
    console.log(product)
    res.json(product)
  })
}

/*exports.create = (req, res) => {
  ProductModel.create(req, res).then((data) => {
    let products = data
    res.json(products[0])
    console.log('ok')
  })
}*/

exports.insert = (req, res) => {
console.log(req.body.name);
console.log(req.body.description);
console.log(req.body.price);
 ProductModel.insert(
   req.body.name, // nombre
   req.body.description, // descripción
   req.body.price) // precio
   .then((data) => {
     console.log('ok')
   })
}

exports.update = (req, res) => {
  ProductModel.update(req.params.id, req.params.name, req.body.description, req.params.price).then((data)=> {
    let products = data
    res.json(products)
    console.log('ok')
  })
}

exports.delete = (req, res) => {
  ProductModel.del(req.params.id).then((data) => {
    let product = data
    res.json('ok')
    console.log('ok')
  })
}

exports.default = (req, res) => {
  res.send('Default')
}

exports.homepage = (req, res) => {
  res.render('pages/homepage')
}

exports.createpage = (req, res) => {
  res.render('pages/create')
}
