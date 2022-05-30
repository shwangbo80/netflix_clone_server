const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    synopsis: {
        type: String,
        required: false,
    },
    video_url: {
        type: String,
        required: false,
    },
    image_url: {
        type: String,
        required: false,
    },
    release_date: {
        type: String,
        required: false,
    },
    running_time: {
        type: String,
        required: false,
    },
    actors: {
        type: String,
        required: false,
    },
    director: {
        type: String,
        required: false,
    },
    rating: {
        type: String,
        required: false,
    },
    genre_id: {
        type: String,
        required: false,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
