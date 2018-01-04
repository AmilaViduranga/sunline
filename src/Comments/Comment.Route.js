var express     = require('express');
var Controller  = require('./Comment.Controller');
var router      = express.Router();

/*
 * insert new comment
 * */
router.post('/', function(req, res) {
    var instance = {
        owner: req.body.owner,
        comment: req.body.comment
    }

    Controller.insertNewComment(instance, function(result) {
        res.send(result);
    })
})

/*
 * get all comments
 * */
router.get('/', function(req, res) {
    Controller.getAllComments(function(results) {
        res.send(results);
    })
})

module.exports = router;