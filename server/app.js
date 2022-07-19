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

const defaultCriteria = {
    poster: {$exists: true},
    plot: {$exists: true}
}

app.get('/movies', async (req, res) => {
    try {
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
        const finalCriteria = {$and: [criteria, defaultCriteria]}
        res.json({
            count: await Movie.countDocuments(finalCriteria),
            items: await Movie.find(finalCriteria).limit(6)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({messgae: error.message})
    }
})

const getRandom = (count) => {
    return Math.floor(Math.random() * count)
}

app.get('/movies/random', async (req, res) => {
    try {
        const {genres} = req.query
        const arrGenres = genres ? genres.split(',') : []
        const criteria = {}
        if (arrGenres.length) {
            criteria.genres = {$all: arrGenres}
        }
        const finalCriteria = {$and: [criteria, defaultCriteria]}
        const count = await Movie.countDocuments(finalCriteria)
        const skip = getRandom(count)
        console.log(skip)
        res.json({
            item: (await Movie.find(finalCriteria).limit(1).skip(skip))[0]
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({messgae: error.message})
    }
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