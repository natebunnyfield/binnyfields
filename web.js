/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , logfmt = require('logfmt')
  , app = express()
  , querystring = require('querystring')

app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(logfmt.requestLogger())
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static(path.join(__dirname, 'public')))
})

global.NODE_ENV = app.settings.env

app.configure('development', function(){
  app.use(express.errorHandler())
})

app.get('/', function(req, res){
  fs.readFile('index.html', function(err, contents){
    res.setHeader('Content-Type', 'text/html')
    res.end(contents)
  })
})

app.get('/bundle.js', function(req, res){
  fs.readFile('bundle.js', function(err, contents){
    res.setHeader('Content-Type', 'application/javascript')
    res.end(contents)
  })
})

app.post('*', function(request, response){
  data = querystring.stringify(request.body)
  options = {
    host: 'www.binnys.com',
    port: 80,
    path: request.url,
    method: request.method,
    headers: {
      'Content-Type': request.headers['content-type'],
      'Content-Length': data.length
    }
  }
  proxy_callback = function(resp) {
    resp.on('data', function(chunk){
      response.write(chunk, 'binary')
    })
    resp.on('end', function() {
      response.end()
    })
    response.writeHead(resp.statusCode, resp.headers)
  }
  proxy_request = http.request(options, proxy_callback)
  proxy_request.write(data)
  proxy_request.end()
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
