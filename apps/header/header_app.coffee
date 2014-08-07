API =
  show: ->
    Show = require('./show/show_controller')
    new Show

module.exports =
  start: ->
    API.show()
