var http = require('http');

http.createServer(function(req,res){
    res.write('hello world!');
    console.log(res)
    res.end();
    
}).listen(8000,'localhost');

console.log('hello world');