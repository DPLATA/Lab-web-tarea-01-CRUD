let ProductModel = require('../models/Product')

exports.product = (req, res) => {
  ProductModel.one(req.params.id).then((data) => {
    let product = data
    console.log(product)
    res.render('pages/product', { product: product })
  })
}

exports.insert = (req, res) => {
 ProductModel.insert(
   req.body.name,
   req.body.description,
   req.body.price).then((data) => {
     ProductModel.all()
     .then((data) => {
       let products = data
       res.render('pages/homepage', { products: products })
     })
   })
}

exports.insertpage = (req, res) => {
 res.render('pages/create')
}

exports.update = (req, res) => {
  ProductModel.update(req.body.id, req.body.name, req.body.description, req.body.price).then((data)=> {
    ProductModel.all()
    .then((data) => {
      let products = data
      res.render('pages/homepage', { products: products })
    })
  })
}

exports.deletepage = (req, res) => {
  ProductModel.one(req.params.id).then((data) => {
    let product = data
    console.log(product)
    res.render('pages/delete', { product: product })
  })
}

exports.delete = (req, res) => {
  console.log(req.body.id);
  ProductModel.delete(req.params.id).then((data) => {
    ProductModel.all()
    .then((data) => {
      let products = data
      res.render('pages/homepage', { products: products })
    })
  })
}

exports.homepage = (req, res) => {
  ProductModel.all()
  .then((data) => {
    let products = data
    res.render('pages/homepage', { products: products })
  })
}

exports.default = (req, res) => {
  res.send('Default')
}
