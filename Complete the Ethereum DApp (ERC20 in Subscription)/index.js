var express = require("express");
var app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.listen(port, () => {
    console.log("Listening at http://localhost:3000");
});