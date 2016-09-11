const http      = require('http')

const ecstatic  = require('ecstatic')


http.createServer(
  ecstatic({root: __dirname})
).listen(8080)

console.log('listening on:8080')
