Product = require('./product')

class Products extends Backbone.Collection
  model: Product
  comparator: 'proof'

module.exports = Products
