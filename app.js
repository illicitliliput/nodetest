var express = require("express");
var app = express();
var port = 3000;

//Routes
app.get("/", function(req, res){
    res.send("Bonjour");
});

app.get("/blop", function(req, res){
    res.send("Bonbye");
});

app.get("*", function(req, res){
    res.send("you are a star");
})
app.listen(port, function(){
    console.log(`Server listening on port ${port}`);
})