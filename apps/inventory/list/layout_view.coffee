Layout = Marionette.Layout.extend
  className: 'container'
  template: require('./layout')
  regions:
    listRegion: '#list-region'
    panelRegion: '#panel-region'

module.exports = Layout
