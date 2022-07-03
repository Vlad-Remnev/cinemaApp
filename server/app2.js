const express = require('express')
require('./models/db')
const Movie = require('./models/Movie')
const app = express()
const cors = require("cors")
const port = 3001

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', async (req, res) => {

})

app.get('/movies/:movieId', async (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
