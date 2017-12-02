/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Film = connection.define('film', {
    language: Sequelize.STRING,
    url: Sequelize.STRING,
    producer: Sequelize.STRING,
    title: Sequelize.STRING,
    cast: Sequelize.STRING,
    concept: Sequelize.STRING,
    storyBoard: Sequelize.STRING,
    director: Sequelize.STRING,
    strunt: Sequelize.STRING,
    camera: Sequelize.STRING,
    videoEditor: Sequelize.STRING,
    produuction: Sequelize.STRING,
    feedback: Sequelize.STRING
}, {
    tableName: 'film',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Film;