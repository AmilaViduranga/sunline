/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./Teledrama.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert new teledraama detail
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        url: req.body.url,
        language: req.body.language,
        producer: req.body.producer,
        title: req.body.title,
        director: req.body.director,
        camera: req.body.camera,
        editor: req.body.editor,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertTeledramaInfo(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting teledrama info
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        url: req.body.url,
        language: req.body.language,
        producer: req.body.producer,
        title: req.body.title,
        director: req.body.director,
        camera: req.body.camera,
        editor: req.body.editor,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateTeledramaInfo(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all teledrama info
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllTeledramaInfo(data, function (result) {
        res.send(result);
    });
});

/*
 * search individual teledrama info
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchTeledramaInfoIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * delete individual teledrama info
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteTeledramaInfo(data, function (result) {
        res.send(result);
    });
});

module.exports = router;