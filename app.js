var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

var app = express();

// Setup static public directory
app.use(express.static(path.join(__dirname , './public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/:text", function(req, res, next){
    console.log("### Input text is: " + req.params.text);
    res.json({"text":req.params.text});
});

app.get("/", function(req, res, next){
  res.send("<h1>Hello World!!</h1><br><h2>Invoke /api/ with a text ;-)</h2>");
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("### Start listening on port " + port);
