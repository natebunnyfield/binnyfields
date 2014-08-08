Controller = Marionette.Controller.extend
  initialize: ->
    @layout = @getLayoutView()
    @listenTo @layout, 'show', =>
      @listRegion()
      @panelRegion()
    App.vent.on 'list:products', (products) =>
      @listRegion products
    App.mainRegion.show @layout

  listRegion: (products) ->
    listView = @getListView products
    @layout.listRegion.show listView

  panelRegion: ->
    panelView = @getPanelView()
    @layout.panelRegion.show panelView

  getLayoutView: ->
    Layout = require('./layout_view')
    new Layout

  getListView: (products) ->
    List = require('./list_view')
    new List
      collection: products

  getPanelView: ->
    Panel = require('./panel_view')
    new Panel

module.exports = Controller
