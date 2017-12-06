/**
 * Created by Amila on 11/30/2017.
 */
var MusicVideoModel = require("./MusicVideo.Model");
var DebugModuler    = require('../LogManager');

function MusicVideoController() {
    /*
     * insert a new music video infomation
     */
    this.insertNewMusicVideo = function(data, callback) {
        MusicVideoModel.create(data).then(function(status) {
            DebugModuler.info("new music video detail added by " + data.processBy);
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * update excisting music video
     */
    this.updateMusicVideo = function(data, callback) {
        MusicVideoModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            instance.update({
                language: data.language,
                url: data.url,
                lyrics: data.lyrics,
                artist: data.artist,
                musicBy: data.musicBy,
                title: data.title,
                camera: data.camera,
                production: data.production,
                feedback: data.feedback
            }).then(function(result) {
                DebugModuler.warn("Music Video " + instance.id + " has updated by " + data.processBy);
                callback(result);
            }).catch(function(err) {
                callback(err);
            })
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all music video info
     */
    this.searchAllMusicVideos = function(data, callback) {
        MusicVideoModel.findAll().then(function(result) {
            DebugModuler.info("All Music videos has searched by " + data.processBy);
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual music video
     */
    this.searchMusicVideoIndividual = function(data, callback) {
        MusicVideoModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Music Video "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete music video
     */
    this.deleteMusicVideo = function(data, callback) {
        MusicVideoModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Music video "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new MusicVideoController();