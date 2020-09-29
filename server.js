/* Based on instructions at https://www.youtube.com/watch?v=yfW9knTBR90 */
const express = require('express');
const port = process.env.VUE_APP_httpPort;

const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res){
  res.sendfile(__dirname + "/dist/index.html")
});

app.listen(port);

console.log('server started');
