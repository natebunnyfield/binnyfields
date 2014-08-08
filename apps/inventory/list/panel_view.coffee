Panel = Marionette.ItemView.extend
  template: require('./panel')
  events:
    'submit': 'search'
  search: (e) =>
    log arguments
    e.stopPropagation()
    e.preventDefault()

    keyword = $('#search-keyword').val() # TODO gross

    $.ajax
      type: 'POST'
      url: '/ajax/productlist'
      data:
        keyword: keyword
      success: =>
        log 'worked'
      error: =>
        log 'failed'
    #App.commands.execute 'search', () ->

module.exports = Panel
