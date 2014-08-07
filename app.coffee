console.clear()

App = new Marionette.Application()

window.$ = $
window._ = _
window.App = App
window.Backbone = Backbone
window.log = (args...) ->
  if _.size(args) is 1
    console.log args[0]
  else
    console.log args
window.info = (args...) ->
  if _.size(args) is 1
    console.info args[0]
  else
    console.info args
window.warn = (args...) ->
  if _.size(args) is 1
    console.warn args[0]
  else
    console.warn args

App.addRegions
  headerRegion: '#header-region'
  mainRegion: '#main-region'

App.on 'initialize:before', (options) ->
  log 'init:before'
  #require('./models/skus')

App.on 'initialize:after', ->
  log 'init:after'
  Header = require('./apps/header/header_app')
  Header.start()
  #@startHistory()

module.exports = App
