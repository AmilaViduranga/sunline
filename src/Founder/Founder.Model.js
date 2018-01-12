var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var Founder = connection.define('founder', {
    description: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING }
}, {
    tableName: 'founder',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Founder;