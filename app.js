import express from 'express';

const server = express();

//routes
server.get('/', (req, res) => {
    res.send({message: 'Hello Express!!!!!!!!!!!!!'});
});

server.get('/favicon.*', (req, res) => {
    res.sendFile(process.cwd() + '/favicon.ico');
});

server.listen(3000);

