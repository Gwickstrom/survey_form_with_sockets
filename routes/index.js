module.exports = function Route(app,server){

    var io = require('socket.io').listen(server);

    app.get('/', function(req,res){
        res.render("index");
    });

    io.sockets.on('connection', function(socket){
        console.log("sockets connected");
        socket.on('posting_form', function(data){

            var rand_num = Math.floor((Math.random() * 1000) + 1);

            socket.emit('updated_message', {response: data});
            socket.emit('rand_num', {response: rand_num});
        })
    })

}
