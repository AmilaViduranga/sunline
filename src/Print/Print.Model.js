/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Print = connection.define('print', {
    concept: Sequelize.STRING,
    client: Sequelize.STRING,
    designer: Sequelize.STRING,
    url: Sequelize.STRING
}, {
    tableName: 'print',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Print;