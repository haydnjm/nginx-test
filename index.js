const express = require('express');
const bodyParser = require('body-parser');
const { NODE_ENV } = process.env;

const app = express();

app.use(bodyParser.json());

require('./routes')(app);

app.listen(5000);

console.log('running on 5000');
