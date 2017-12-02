/**
 * Created by Amila on 11/30/2017.
 */
var Sequelize = require('sequelize');
var sequelize = require('sequelize')
    , sequelize = new Sequelize('sunline', 'root', '', {
    dialect: "mysql",
    port:    3306,
});

module.exports = sequelize;