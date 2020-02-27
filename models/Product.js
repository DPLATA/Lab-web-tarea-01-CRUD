const knex = require('../database/connection')


//display all products RETRIEVE
exports.all = () => {
  return knex('products')
}

exports.one = (id) => {
  return knex('products').where('id', id)
}


//insert new product CREATE
exports.insert = (name, description, price) => {
  return knex('products').insert({
    name:name,
    description:description,
    price:price
  })
}


//update product name description and price by id UPDATE
exports.update = (id, name, description, price) => {
  return knex('products').where('id', id).update({
    name: name,
    description: description,
    price: price
  })
}


//delete product by id DELETE
exports.del = (id) => {
  return knex('products')
  .where('id', id)
  .from('products').del()
}
