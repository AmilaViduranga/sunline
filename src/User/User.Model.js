/**
 * Created by Amila on 11/30/2017.
 */
var connection  = require('../DBConnection');
var Sequelize   = require('sequelize');

var User = connection.define('user', {
    userName: { type:Sequelize.STRING, allowNull: false, unique: true},
    password: { type:Sequelize.STRING, allowNull: false},
    email: { type: Sequelize.STRING, unique: true },
    userType: { type:Sequelize.STRING, allowNull: false}
}, {
    tableName: 'user',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = User;