/**
 * Created by Amila on 11/30/2017.
 */
var FilmModel       = require("./Film.Model");
var DebugModuler    = require('../LogManager');

function FilmController() {
    /*
     * insert a new Film infomation
     */
    this.insertNewFilm = function(data, callback) {
        FilmModel.create(data).then(function(status) {
            DebugModuler.info("new film detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update excisting film details
     */
    this.updateFilm = function(data, callback) {
        FilmModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                language: data.language,
                url: data.url,
                producer: data.producer,
                title: data.title,
                cast: data.cast,
                concept: data.concept,
                storyBoard: data.storyBoard,
                director: data.director,
                strunt: data.strunt,
                camera: data.camera,
                videoEditor: data.videoEditor,
                production: data.production,
                feedback: data.feedback
            }).then(function(result) {
                DebugModuler.warn("Film " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all film info
     */
    this.searchAllFilm = function(data, callback) {
        FilmModel.findAll().then(function(result) {
            DebugModuler.info("All Films has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual film
     */
    this.searchFilmIndividual = function(data, callback) {
        FilmModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Film "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete film
     */
    this.deleteFilm = function(data, callback) {
        FilmModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Film "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new FilmController();