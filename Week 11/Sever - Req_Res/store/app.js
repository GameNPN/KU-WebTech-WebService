const http = require('http');
const express = require('express');

// middleware
const app = express();

app.use((req, res, next) => {
    console.log('Say Hi from middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Say Fi from another middleware');
    res.send('<h1>This is Wifi</h1>');
});

const server = http.createServer(app);

server.listen(3000);
