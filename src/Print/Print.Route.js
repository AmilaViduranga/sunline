/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./Print.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');
/*
 * insert new print detail
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        concept: req.body.concept,
        client: req.body.client,
        designer: req.body.designer,
        url: req.body.url,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertPrintInfo(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting print info
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        concept: req.body.concept,
        client: req.body.client,
        designer: req.body.designer,
        url: req.body.url,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updatePrintInfo(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all print info
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllPrintInfo(data, function (result) {
        res.send(result);
    });
});

/*
 * search individual print info
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchPrintInfoIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * delete individual print info
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deletePrintInfo(data, function (result) {
        res.send(result);
    });
});

module.exports = router;