var express = require('express')
  , fs      = require('fs');

var app = express.createServer(express.logger());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {
  indexBuf = fs.readFileSync('index.html');
  response.send(indexBuf.toString());
});

app.get('/orders', function(request, response) {
  response.render("orders", {orders: 1});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
