Controller = Marionette.Controller.extend
  initialize: ->
    show = @getShowView()
    App.headerRegion.show show

  getShowView: ->
    Show = require('./show_view')
    new Show

module.exports = Controller
