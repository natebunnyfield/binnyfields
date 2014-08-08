API =
  list: ->
    List = require('./list/list_controller')
    new List

module.exports =
  start: ->
    API.list()
