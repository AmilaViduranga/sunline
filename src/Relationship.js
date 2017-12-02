/**
 * Created by Amila on 11/30/2017.
 */
var User        = require('./User/User.Model');
var Print       = require('./Print/Print.Model');
var Commercial  = require('./Commercial/Commercial.Model');
var Teledrama   = require('./Teledrama/Teledrama.Model');
var Film        = require('./Film/Film.Model');
var MusicVideo  = require('./MusicVideo/MusicVideo.Model');
var Connection  = require('./DBConnection');

function Relationship() {

    User.hasMany(Print);
    Print.belongsTo(User);

    User.hasMany(Commercial);
    Commercial.belongsTo(User);

    User.hasMany(Teledrama);
    Teledrama.belongsTo(User);

    User.hasMany(Film);
    Film.belongsTo(User);

    User.hasMany(MusicVideo);
    MusicVideo.belongsTo(User);

    Connection
        .sync()
        .then(function() {
            console.log("Database created");
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
}

module.exports = new Relationship();