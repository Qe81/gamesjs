var users = [];

app.get('/', function (req, res) {

res.sendfile(__dirname + '/game.html');
    });

io.sockets.on('connection', function (socket) {

    socket.on('adduser', function (user) {
        socket.user = user;
        users.push(user);
        updateClients();
    });

    socket.on('disconnect', function () {
        for(var i=0; i<users.length; i++) {
            if(users[i] == socket.user) {
                delete users[users[i]];
            }
        }
        updateClients(); 
    });

    function updateClients() {
        io.sockets.emit('update', users);
    }

});