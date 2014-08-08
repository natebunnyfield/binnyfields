var webpack = require('webpack')

module.exports = {
  cache: true,
  context: __dirname,
  target: 'web',
  entry: './main.coffee',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(sass|scss)$/, loader: 'style!css!sass' },
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.gif$/, loader: 'url?limit=100000&mimetype=image/gif' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.jpg$/, loader: 'url?limit=100000&mimetype=image/jpg' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.png$/, loader: 'url?limit=100000&mimetype=image/png' },
      { test: /\.svg/, loader: 'file' },
      { test: /\.ttf/, loader: 'file' },
      { test: /\.woff/, loader: 'url?limit=100000&mimetype=application/font-woff' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.coffee', '.jade'],
    modulesDirectories: ['lib', 'node_modules', 'bower_components', 'web_modules'],
    alias: {
      'app': __dirname + '/app.coffee',
      'underscore': __dirname + '/bower_components/lodash/dist/lodash.underscore.js',
      'backgrid': __dirname + '/bower_components/backgrid/lib/backgrid.js',
      'backgrid-filter': __dirname + '/bower_components/backgrid-filter/backgrid-filter.js'
    }
  },
  amd: {
    $: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      _: 'underscore',
      App: 'app',
      Backbone: 'backbone',
      Marionette: 'marionette'
    }),
    new webpack.ResolverPlugin([
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main', ['main', '1']])
    ], ['normal', 'loader'])
  ]
}
