var express     = require('express');
var Controller  = require('./FoundationImages.Controller');
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

    Controller.insertNewImage(instance, function (result) {
        res.send(result);
    });
});

/*
 * update excisting foundation image info
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var instance = {
        id: req.body.id,
        description: req.body.description,
        url: req.body.url,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.updateImageInfo(instance, function(result) {
        res.send(result);
    });
});

/*
 * search all image info
 */
router.get('/', function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchAllImageInfo(data, function (result) {
        res.send(result);
    });
});

/*
 * seach individual image details
 */
router.get('/:id', function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.searchImageIndividual(data, function (result) {
        res.send(result);
    });
});

/*
 * deelete individual image detail
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    };

    Controller.deleteImage(data, function (result) {
        res.send(result);
    });
});

module.exports = router;