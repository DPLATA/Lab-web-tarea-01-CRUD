let ProductModel = require('../models/Product')

exports.homepage = (req, res) => {

  ProductModel.all()
  .then((data) => {
    res.render('pages/homepage')
  })
}

exports.create = (req, res) => {
  ProductModel.insert().then((data) => {
    console.log('ok')
  })
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
