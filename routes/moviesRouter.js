const express = require("express");
const response = require("../app");
const Movie = require("../models/movies");

const movieRouter = express.Router();

movieRouter
    .route("/")
    .get((req, res, next) => {
        Movie.find()
            .then((movies) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(movies);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Movie.create(req.body)
            .then((movie) => {
                console.log("Movie Created", movie);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/jspn");
                res.json(movie);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /movies");
    })
    .delete((req, res, next) => {
        Movie.deleteMany()
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/jspn");
                res.json(response);
            })
            .catch((err) => next(err));
    });

movieRouter
    .route("/:movieId")
    .get((req, res, next) => {
        Movie.findById(req.params.movieId)
            .then((movies) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(movies);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(
            `POST operation not suuported on /campsites/${req.params.movieId}`
        );
    })
    .put((req, res, next) => {
        Movie.findByIdAndUpdate(
            req.params.movieId,
            {
                $set: req.body,
            },
            {new: true}
        )
            .then((movie) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(movie);
            })
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Movie.findByIdAndDelete(req.params.movieId)
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(response);
            })
            .catch((err) => next(err));
    });

module.exports = movieRouter;
