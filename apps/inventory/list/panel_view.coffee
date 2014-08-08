Panel = Marionette.ItemView.extend
  template: require('./panel')
  events:
    'submit': 'search'
  search: (e) =>
    e.stopPropagation()
    e.preventDefault()

    # TODO gross
    keyword = $('#search-keyword').val()

    # TODO Replace with App.vent.request 'get:products', keyword, (whatever) =>
    $.ajax
      type: 'POST'
      url: '/ajax/productlist'
      data:
        keyword: keyword
      success: (data) =>
        products = new Backbone.Collection data,
          comparator: 'Availability'
        App.vent.trigger 'list:products', products
      error: =>
        warn 'search error',arguments

module.exports = Panel
