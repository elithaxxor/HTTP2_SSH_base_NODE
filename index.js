const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
            "key": fs.readFileSync("key.pem"),
            "cert": fs.readFileSync("cert.pem")
})

/* to specify speciifc IP to listen for / port to accept */
// var server = app.listen(3000, '127.0.0.1', onServerListening);

server.listen(833);
server.on("stream",(stream, headers)=>{
            console.log(stream.id)
            stream.respond({
                        "content-type": "application/json",
                        "status": 200            
            })

            stream.end(JSON.stringify({
                        "user": "poopmen",
                        "id": 101
            }))
})



