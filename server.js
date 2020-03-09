import http from 'http';
//import { response } from 'express';


const server = http.createServer();

server.on('request', (req, res) => {

    console.log("There is a request", req.url);

    if (res.url == '/favicon.ico') {
        response.write('Sending you the favicon)');
    } else {
        res.write('hell oworld - the file you have requested is ' + req.url);
    }
    res.end();

});

server.listen(3000);