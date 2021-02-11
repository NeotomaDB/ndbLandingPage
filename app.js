const http = require('http')
const fs = require('fs')
require('dotenv').config()

const httpPort = process.env.VUE_APP_HTTP_PORT

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: https://localhost:%s', httpPort)
})
