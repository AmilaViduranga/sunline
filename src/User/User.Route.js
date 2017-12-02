/**
 * Created by Amila on 11/30/2017.
 */
var express     = require('express');
var Controller  = require('./User.Controller');
var router      = express.Router();
var jwt         = require('express-jwt');

/*
 * insert a new user to system / signup
 */
router.post('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function (req, res) {
    var instance = {
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        userType: req.body.userType,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.insertUser(instance, function(result) {
        res.send(result);
    })
});

/*
 * get all the users
 */
router.get('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.searchAllUsers(data, function(result) {
        res.send(result);
    })
});

/*
 * update the user
 */
router.put('/', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        userId: req.body.userId,
        userName: req.body.userName,
        password: req.body.password,
        userType: req.body.userType,
        email: req.body.email,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.updateUser(data, function(result) {
        res.send(result);
    })
});

/*
 * get single user
 */
router.get('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.searchSingleUser(data, function(result) {
        res.send(result);
    })
});

/*
 * delete user
 */
router.delete('/:id', jwt({secret: 'sunline web'}).unless({path:['/user/login']}), function(req, res) {
    var data = {
        id: req.params.id,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.deleteUser(data, function(result) {
        res.send(result);
    })
});

/*
 * login to the system
 */
router.post('/login', function(req, res) {
    var data = {
        userName: req.body.userName,
        password: req.body.password,
        processBy: req.connection.remoteAddress || req.headers['x-forwarded-for']
    }

    Controller.loginSystem(data, function(result) {
        if(result.status == 404) {
            res.status(404);
        }
        res.status(200).json(result);
    })
})

module.exports = router;