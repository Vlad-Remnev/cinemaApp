const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    title: String,
    languages: [String],
    released: Date,
    directors: [String],
    writers: [String],
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String]
});

const Movie = mongoose.model('Movie', MovieSchema, 'films');

module.exports = Movie;