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
    res.render('pages/products', { product: product })
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
 ProductModel.insert(
   req.body.name,
   req.body.description,
   req.body.price).then((data) => {
     let products = data
     console.log('ok' + data);
   })
}

exports.update = (req, res) => {
  ProductModel.update(req.body.id, req.body.name, req.body.description, req.body.price).then((data)=> {
    let products = data
    res.json(products)
    console.log('ok')
    res.render('pages/products')
  })
}

exports.delete = (req, res) => {
  ProductModel.del(req.params.id).then((data) => {
    let product = data
    res.json('ok')
    console.log('ok')
    res.render('pages/products')
  })
}

exports.homepage = (req, res) => {
  res.render('pages/homepage')
}

exports.default = (req, res) => {
  res.send('Default')
}
