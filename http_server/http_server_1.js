const http = require("http");
const port = 3001;
const host = "localhost";


let server = http.createServer(function(req, res){
    res.writeHead(
        200,
        {
            "content-type": "text/html",
            "access-control-allow-origin": "*"
        }
    );

    res.write("Hello World. This is my second server with node.js clasic");
    res.end()
})

server.listen(port, host, ()=> {
    console.log(`Click pe http://${host}:${port}`);
})