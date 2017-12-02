/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Teledrama = connection.define('teledrama', {
    url: Sequelize.STRING,
    language: Sequelize.STRING,
    producer: Sequelize.STRING,
    title: Sequelize.STRING,
    director: Sequelize.STRING,
    camera: Sequelize.STRING,
    editor: Sequelize.STRING
}, {
    tableName: 'teledrama',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Teledrama;