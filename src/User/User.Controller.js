/**
 * Created by Amila on 11/30/2017.
 */
var UserModel       = require('./User.Model');
var DebugModuler    = require('../LogManager');
var bcrypt          = require('bcrypt');
var jwt             = require('jsonwebtoken');

function UserController() {
    var saltRound = 10;
    /*
     * insert a new user
     */
    this.insertUser = function(data, callback) {
        bcrypt.hash(data.password, saltRound, function(err, hash) {
            if(hash) {
                data.password = hash;
                UserModel.create(data).then(function(state) {
                    DebugModuler.info(data.processBy + " has sign up as " + data.userName);
                    callback({state: 200});
                }).catch(function(err) {
                    callback({state: 400, error: err});
                })
            }
        })
    }

    /*
     * update excist user
     */
    this.updateUser = function(data, callback) {
        UserModel.find({
            where: {
                id: data.userId
            }
        }).then(function (instance) {
            instance.update({
                userName: data.userName,
                password: data.password,
                email: data.email,
                userType: data.userType
            }).then(function(result) {
                DebugModuler.warn(instance.userName + " has updated by " + data.processBy);
                callback(result);
            })
        }).catch(function(err) {
            callback(err);
        })
    }

    /*
     * delete excist user
     */
    this.deleteUser = function(data, callback) {
        UserModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.destroy();
            DebugModuler.warn(instance.userName + "has removed by " + data.processBy);
            callback(state);
        }).catch(function(err) {
            callback(err);
        })
    }

    /*
     * search single user
     */
    this.searchSingleUser = function(data, callback) {
        UserModel.find({
            where: {
                id: data.id
            },
            attributes:['id','email','userName','userType']
        }).then(function(instance) {
                DebugModuler.warn(instance.userName + " has searched by " + data.processBy);
                callback(instance);
        }).catch(function(error) {
            callback(error);
        })
    }

    /*
     * search all the records
     */
    this.searchAllUsers = function(data, callback) {
        UserModel.findAll({
            attributes:['id','email','userName','userType']
        }).then(function(results) {
            DebugModuler.warn("All users are searched by " + data.processBy);
            callback(results);
        }).catch(function(err) {
            callback(err);
        })
    }

    /*
     * login user
     */
    this.loginSystem = function(data, callback) {
        UserModel.find({
            where: {
                userName: data.userName
            },
            attributes:['id','email','userName','userType','password']
        }).then(function(instance) {
            if(instance) {
                bcrypt.compare(data.password, instance.password, function(err, response) {
                    if(response == true) {
                        DebugModuler.debug("Successfully logged to system by "+ data.processBy);
                        var token = jwt.sign({ userName: instance.userName}, 'sunline web');
                        callback({userId:instance.id, token: token});
                    } else if(err || response == false) {
                        DebugModuler.warn("UnSuccessfully attempt to logged to system by "+ data.processBy);
                        callback({status: 404})
                    }
                })
            }
        }).catch(function(err) {
            callback(err);
        })
    }
}

module.exports = new UserController();