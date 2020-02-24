let ProductModel = require('../models/Product')

exports.products = (req, res) => {
  ProductModel.all()
  .then((data) => {
    let products = data
    console.log(products)
    res.render('pages/products', {products: products})
  })
}

exports.create = (req, res) => {
  res.render('pages/create')
  /*ProductModel.create().then((data) => {

    //console.log('ok')
  })*/
}

exports.retrieve = (req, res) => {
  console.log('ok')
}

exports.update = (req, res) => {
  ProductModel.update().then((data)=> {
    console.log('ok')
  })
}

exports.delete = (req, res) => {
  ProductModel.del().then((data) => {
    console.log('ok')
  })
}

exports.default = (req, res) => {
  res.send('Default')
}
