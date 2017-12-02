/**
 * Created by Amila on 11/30/2017.
 */
var log4js  = require('log4js');
log4js.configure({
    appenders: {
        everything: { type: 'file', filename: 'public/logs/sunline.log' }
    },
    categories: {
        default: { appenders: [ 'everything' ], level: 'debug' }
    }
});
const logger = log4js.getLogger();
module.exports = logger;