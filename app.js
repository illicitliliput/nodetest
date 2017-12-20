var express = require("Express");
var app = express();
var port = 3000;

//Routes
app.get("/", function(req, res){
    res.send("Bonjour");
});

app.get("/blop", function(req, res){
    res.send("Bonbye");
});

app.listen(port, function(){
    console.log(`Server listening on port ${port}`);
})