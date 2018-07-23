const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Oh Hi there !'))

var routes = require('./router.js')
routes(app)

app.listen(3000, () => console.log('something beautiful'))
