var http = require('http');
var express = require('express');

var app = express();

//Setting ejs templates
app.set('view engine','ejs');

//setting static files
app.use("/public/css",express.static("public/css"))
app.use("/public/assets",express.static("public/assets"))
app.use("/public/js",express.static("public/js"))
app.use("/public/view",express.static("public/view"))

app.get('/',function(req,res){
  res.render("index");
});

app.listen(3000,(err) =>{
  console.log("connected");
})
