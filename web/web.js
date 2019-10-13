const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

class WebSocket {
    constructor(token, port, client) {
        this.token = token;
        this.port = port;
        this.client = client;
        this.app = express();
        this.app.engine('hbs', hbs({
            extname: 'hbs',
            defaultLayout: 'layout',
            layoutsDir: __dirname + '/lay'
        }))
    }
} 