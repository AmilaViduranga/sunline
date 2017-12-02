/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./MusicVideo.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert new music video
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        language: req.body.language,
        url: req.body.url,
        lyrics: req.body.lyrics,
        artist: req.body.artist,
        musicBy: req.body.musicBy,
        title: req.body.title,
        camera: req.body.camera,
        production: req.body.production,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertNewMusicVideo(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting music video
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        language: req.body.language,
        url: req.body.url,
        lyrics: req.body.lyrics,
        artist: req.body.artist,
        musicBy: req.body.musicBy,
        title: req.body.title,
        camera: req.body.camera,
        production: req.body.production,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateMusicVideo(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all music videos
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllMusicVideos(data, function (result) {
        res.send(result);
    });
});

/*
 * seach individual music video
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchMusicVideoIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * delete individual music video
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteMusicVideo(data, function (result) {
        res.send(result);
    });
});

module.exports = router;