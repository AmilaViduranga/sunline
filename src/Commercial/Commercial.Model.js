/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Commercial = connection.define('commercial', {
    storyBoard: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING },
    client: { type: Sequelize.STRING },
    director: { type: Sequelize.STRING },
    editor: { type: Sequelize.STRING },
    concept: { type: Sequelize.STRING },
    feedback: { type: Sequelize.STRING }
}, {
    tableName: 'commercial',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Commercial;