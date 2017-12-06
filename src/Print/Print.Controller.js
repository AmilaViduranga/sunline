/**
 * Created by Amila on 11/30/2017.
 */
var PrintModel      = require("./Print.Model");
var DebugModuler    = require('../LogManager');

function PrintController() {
    /*
     * insert a new print information
     */
    this.insertPrintInfo = function(data, callback) {
        PrintModel.create(data).then(function(status) {
            DebugModuler.info("new print detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update available print information
     */
    this.updatePrintInfo = function(data, callback) {
        PrintModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                concept: data.concept,
                client: data.client,
                designer: data.designer,
                url: data.url
            }).then(function(result) {
                DebugModuler.warn("print info " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all print info
     */
    this.searchAllPrintInfo = function(data, callback) {
        PrintModel.findAll().then(function(result) {
            DebugModuler.info("All Print details has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual print detail
     */
    this.searchPrintInfoIndividual = function(data, callback) {
        PrintModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Print info "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete print detail
     */
    this.deletePrintInfo = function(data, callback) {
        PrintModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Print info  "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new PrintController();