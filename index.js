const express = require('express');
const app = express();
const server = app.listen(4000, () => {
    console.log("8080 portu dinleniyor");
})
const io = require('socket.io')(server);

app.use(express.static('public'));


io.on("connection", socket => {
    console.log("birisi baglandi", socket.id);
    
    socket.on("chat", data => {
        
        io.sockets.emit("chat", data);
    });
    
    socket.on("writing", data => {
        socket.broadcast.emit("writing", data);
    })
    
});