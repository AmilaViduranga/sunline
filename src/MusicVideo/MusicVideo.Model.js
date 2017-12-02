/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var MusicVideo = connection.define('music_video', {
    language: Sequelize.STRING,
    url: Sequelize.STRING,
    lyrics: Sequelize.STRING,
    artist: Sequelize.STRING,
    musicBy: Sequelize.STRING,
    title: Sequelize.STRING,
    camera: Sequelize.STRING,
    production: Sequelize.STRING,
    feedback: Sequelize.STRING
}, {
    tableName: 'music_video',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = MusicVideo;