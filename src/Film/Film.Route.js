/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./Film.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert new film
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        language: req.body.language,
        url: req.body.url,
        producer: req.body.producer,
        title: req.body.title,
        cast: req.body.cast,
        concept: req.body.concept,
        storyBoard: req.body.storyBoard,
        director: req.body.director,
        strunt: req.body.strunt,
        camera: req.body.camera,
        videoEditor: req.body.videoEditor,
        production: req.body.production,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertNewFilm(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting film
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        language: req.body.language,
        url: req.body.url,
        producer: req.body.producer,
        title: req.body.title,
        cast: req.body.cast,
        concept: req.body.concept,
        storyBoard: req.body.storyBoard,
        director: req.body.director,
        strunt: req.body.strunt,
        camera: req.body.camera,
        videoEditor: req.body.videoEditor,
        production: req.body.production,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateFilm(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all films
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllFilm(data, function (result) {
        res.send(result);
    });
});

/*
 * seach individual films
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchFilmIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * deelete individual film
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteFilm(data, function (result) {
        res.send(result);
    });
});

module.exports = router;