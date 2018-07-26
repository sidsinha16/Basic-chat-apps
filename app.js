var http = require('http');
var express = require('express');
var socket = require('socket.io')

var app = express();

//Setting ejs templates
app.set('view engine','ejs');

//setting static files
app.use("/public/css",express.static("public/css"))
app.use("/public/assets",express.static("public/assets"))
app.use("/public/js",express.static("public/js"))
app.use("/",express.static("public/view"))
// app.use(express.static("public"))

console.log(__dirname+'/public/view/index.html')
//route
app.get('/',function(req,res){
  res.sendFile(__dirname+'/public/view/index.html' );
});

//server
var server = app.listen(3000,(err) =>{
  console.log("connected");
})

//socket setup
var io = socket(server);
io.on('connection',(socket)=>{
  console.log('User connected',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  })
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  })

  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});
