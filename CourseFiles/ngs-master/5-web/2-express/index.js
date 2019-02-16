
const http = require('http');
const server =  http.createServer((request, response) => {
  if(request.method == 'POST') {
    
        console.log(request.post);
        // Use request.post here

        response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        response.end(JSON.stringify(request.method));
    
} else {
    response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(request.method));
    console.log(JSON.stringify(request.method));
}

});
server.listen(8080, () => {console.log('The server is running...');});