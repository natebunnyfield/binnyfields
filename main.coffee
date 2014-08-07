require('bootstrap/less/bootstrap.less')
require('bootstrap/dist/js/bootstrap')

_.mixin(require('underscore.string').exports())

App = require('./app')
App.start()
