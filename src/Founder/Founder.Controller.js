var FounderModel    = require("./Founder.Model");
var DebugModuler    = require('../LogManager');

function FounderController() {
    /*
     * insert a new founder infomation
     */
    this.insertNewFounder = function(data, callback) {
        FounderModel.create(data).then(function(status) {
            DebugModuler.info("new founder detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update excisting founder
     */
    this.updateFounder = function(data, callback) {
        FounderModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                description: data.description,
                url: data.url
            }).then(function(result) {
                DebugModuler.warn("Founder " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all founder info
     */
    this.searchAllFounderInformations = function(data, callback) {
        FounderModel.findAll().then(function(result) {
            DebugModuler.info("All founder has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual founder
     */
    this.searchFounderIndividual = function(data, callback) {
        FounderModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Founder "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete commercial
     */
    this.deleteFounder = function(data, callback) {
        FounderModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Founder  "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new FounderController();