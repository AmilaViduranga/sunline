var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Comment = connection.define('comment', {
    owner: { type: Sequelize.STRING },
    comment: { type: Sequelize.STRING }
}, {
    tableName: 'comment',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Comment;