const express = require('express')
require('./models/db')
const Movie = require('./models/Movie')
const app = express()
const cors = require("cors");
const port = 3001

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', async (req, res) => {
    const {genres, q} = req.query
    const arrGenres = genres ? genres.split(',') : []
    const criteria = {}
    if (arrGenres.length) {
        criteria.genres = {$all: arrGenres}
    }
    if (q) {
        // const search = q + ' '
        criteria.title = {$regex: q, $options: 'i'}
    }
    res.json({
        count: await Movie.countDocuments(criteria),
        items: await Movie.find(criteria).limit(1)
    })
})

app.get('/movies/:movieId', async (req, res) => {
    res.json({
        item: await Movie.findById(
            req.params.movieId
        )
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
