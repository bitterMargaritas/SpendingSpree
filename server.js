const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Oh Hi there !'))

app.listen(3000, () => console.log('something beautiful'))
