/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./Commercial.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert new commercial
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}),function(req, res) {
    var instance = {
        title: req.body.title,
        storyBoard: req.body.storyBoard,
        url: req.body.url,
        client: req.body.client,
        director: req.body.director,
        editor: req.body.editor,
        concept: req.body.concept,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertNewCommercial(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting commercial
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        title: req.body.title,
        storyBoard: req.body.storyBoard,
        url: req.body.url,
        client: req.body.client,
        director: req.body.director,
        editor: req.body.editor,
        concept: req.body.concept,
        feedback: req.body.feedback,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateCommercial(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all commercials
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllCommercials(data, function (result) {
        res.send(result);
    });
});

/*
 * seach individual commercial
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchCommercialIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * deelete individual commercial
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteCommercial(data, function (result) {
        res.send(result);
    });
});

module.exports = router;