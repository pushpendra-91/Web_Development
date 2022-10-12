var http = require('http')
var url = require('url')



http.createServer(function(req, res){

    var route = req.url
    if(route==='/') {
        res.end("This is information from backend to homepage")
    }
    if(route==='/getusernames') {
        var username = ['ironman', 'caption', 'blackwidow']
        res.end(JSON.stringify(username))
    }
    console.log("Success at port 5000")
}).listen(5000)