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
  return knex('products').insert(
    name, // nombre
    description, // descripción
    price) // precio
    .then((data) => {
      console.log('ok')
  })

}


//update product name description and price by id UPDATE
/*exports.update = (id, name, description, price) => {
  return knex('products').update({
    name: name,
    description: description,
    price: price
  }).where(id: id)
}*/


//delete product by id DELETE
exports.del = (id) => {
  return knex('products')
  .where('id', id)
  .from('products').del()
}
