const PORT = process.env.PORT || 3003;

const express = require('express');
const bodyParser = require('body-parser');

const server = express()

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT,()=>{
    console.log('Run at', PORT);
});