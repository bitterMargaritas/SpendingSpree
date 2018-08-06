const express = require('express')
const app = express()
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./model')
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BitterMargaritas')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./router.js')
routes(app)

app.listen(port)

console.log('We are crushing it on port ' + port);
