//make connection
let socket = io.connect('http://localhost:3000');

//Query Dom
var message = document.getElementById('message'),
    handle =  document.getElementById('handle'),
    btn =  document.getElementById('send'),
    output =  document.getElementById('output'),
    feedback =  document.getElementById('feedback');

//emit event
btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  })
})
//Whos typing...
message.addEventListener('keypress',()=>{
  socket.emit('typing',handle.value);
})

//Listen for event
socket.on('chat',(data)=>{
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>'+ data.handle +'</strong> '+data.message+'<p>';
})

socket.on('typing',(data) =>{
  feedback.innerHTML = '<p><em> '+ data +' is typing...</em></p>';
})
