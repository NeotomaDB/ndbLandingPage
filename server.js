/* Based on instructions at https://www.youtube.com/watch?v=yfW9knTBR90 */
const express = require('express');
require('dotenv').config()

const port = process.env.VUE_APP_HTTP_PORT;

const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res){
  res.sendFile(__dirname + "/dist/index.html")
});

console.log(process.env.VUE_APP_HTTP_PORT)

app.listen(port);

console.log('server started');
