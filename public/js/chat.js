//make connection
let socket = io.connect('http://localhost:3000');

//Query Dom
var message = document.getElementById('message'),
    handle =  document.getElementById('handle'),
    btn =  document.getElementById('send'),
    output =  document.getElementById('output');

//emit event
btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  })
})
// console.log(btn.value);
//Listen for event
socket.on('chat',(data)=>{
  output.innerHTML += '<p><b>'+data.handle+'</b>'+data.message+'<p>';
})
