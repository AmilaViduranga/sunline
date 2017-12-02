/**
 * Created by Amila on 11/30/2017.
 */
var TeledramaModel      = require("./Teledrama.Model");
var DebugModuler        = require('../LogManager');

function TeledramaController() {
    /*
     * insert a new teledrama
     */
    this.insertTeledramaInfo = function(data, callback) {
        TeledramaModel.create(data).then(function(status) {
            DebugModuler.info("new teledrama detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update available teledrama information
     */
    this.updateTeledramaInfo = function(data, callback) {
        TeledramaModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                url: data.url,
                language: data.language,
                producer: data.producer,
                title: data.title,
                director: data.director,
                camera: data.camera,
                editor: data.editor
            }).then(function(result) {
                DebugModuler.warn("Teledrama info " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all teledrama info
     */
    this.searchAllTeledramaInfo = function(data, callback) {
        TeledramaModel.findAll().then(function(result) {
            DebugModuler.info("All Teledrama details has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual teledrama detail
     */
    this.searchTeledramaInfoIndividual = function(data, callback) {
        TeledramaModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Teledrama info "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete teledrama detail
     */
    this.deleteTeledramaInfo = function(data, callback) {
        TeledramaModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.warn("Teledrama info  "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new TeledramaController();