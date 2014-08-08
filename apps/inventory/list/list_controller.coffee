Controller = Marionette.Controller.extend
  initialize: ->
    @layout = @getLayoutView()
    @listenTo @layout, 'show', =>
      #@listRegion()
      @panelRegion()
    App.mainRegion.show @layout

  listRegion: ->
    listView = @getListView()
    @layout.listRegion.show listView

  panelRegion: ->
    panelView = @getPanelView()
    @layout.panelRegion.show panelView

  getLayoutView: ->
    Layout = require('./layout_view')
    new Layout

  getListView: ->
    List = require('./list_view')
    new List

  getPanelView: ->
    Panel = require('./panel_view')
    new Panel

module.exports = Controller
