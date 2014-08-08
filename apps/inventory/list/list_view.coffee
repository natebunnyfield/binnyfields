ChildView = Marionette.ItemView.extend
  template: require('./item')
  tagName: 'tr'

List = Marionette.CompositeView.extend
  template: require('./list')
  itemView: ChildView
  itemViewContainer: 'tbody'
  tagName: 'table'
  className: 'table'

module.exports = List
