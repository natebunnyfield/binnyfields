Backgrid = require('backgrid')

class Grid extends Backgrid.Grid
  className: 'backgrid table'
  initialize: (options={}) ->
    _.defaults options,
      columns: [
          name: 'id'
        ,
          name: 'sku'
      ]
    super

log new Grid
module.exports = Grid
