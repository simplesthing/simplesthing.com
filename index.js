var express = require('express')
  , http = require('http')
  , config = require('./configuration');
// comment
var app = express();
console.log("Express server listening on port "+ config.port);

app.get("/", function (req, res) {
  res.redirect("client/build/");
});

app.use(express.static(__dirname + '/'));
app.listen(config.port);

