var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var FoundationImages = connection.define('FoundationImages', {
    description: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING }
}, {
    tableName: 'foundation_images',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = FoundationImages;