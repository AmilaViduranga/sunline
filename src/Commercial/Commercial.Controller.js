/**
 * Created by Amila on 11/30/2017.
 */
var CommercialModel = require("./Commercial.Model");
var DebugModuler    = require('../LogManager');

function CommercialController() {
    /*
     * insert a new commercial infomation
     */
    this.insertNewCommercial = function(data, callback) {
        CommercialModel.create(data).then(function(status) {
            DebugModuler.info("new commercial detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update excisting commercial
     */
    this.updateCommercial = function(data, callback) {
        CommercialModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                title: data.title,
                storyBoard: data.storyBoard,
                url: data.url,
                client: data.client,
                director: data.director,
                editor: data.editor,
                concept: data.concept,
                feedback: data.feedback
            }).then(function(result) {
                DebugModuler.warn("Commercial " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all commercial info
     */
    this.searchAllCommercials = function(data, callback) {
        CommercialModel.findAll().then(function(result) {
            DebugModuler.info("All Commercials has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual commercial
     */
    this.searchCommercialIndividual = function(data, callback) {
        CommercialModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Commercial "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete commercial
     */
    this.deleteCommercial = function(data, callback) {
        CommercialModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Commercial "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new CommercialController();