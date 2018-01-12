var express     = require('express');
var Controller  = require('./Founder.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert new founder info
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}),function(req, res) {
    var instance = {
        description: req.body.description,
        url: req.body.url,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.insertNewFounder(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting founder info
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        description: req.body.description,
        url: req.body.url,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateFounder(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all founder info
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllFounderInformations(data, function (result) {
        res.send(result);
    });
});

/*
 * seach individual founder details
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchFounderIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * deelete individual founder detail
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteFounder(data, function (result) {
        res.send(result);
    });
});

module.exports = router;