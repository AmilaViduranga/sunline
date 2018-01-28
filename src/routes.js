var express         = require('express');
var router          = express.Router();

var UserRoute       = require('./User/User.Route');
var CommercialRoute = require('./Commercial/Commercial.Route');
var FilmRoute       = require('./Film/Film.Route');
var MusicVideoRoute = require('./MusicVideo/MusicVideo.Route');
var PrintRoute      = require('./Print/Print.Route');
var TeledramaRoute  = require('./Teledrama/Teledrama.Route');
var CommentRoute    = require('./Comments/Comment.Route');
var founderRoute    = require('./Founder/Founder.Route');
var foundationImage = require('./FoundationImages/FoundationImages.Route');  

router.use('/user/', UserRoute);
router.use('/commercial/', CommercialRoute);
router.use('/film/', FilmRoute);
router.use('/music/', MusicVideoRoute);
router.use('/print/', PrintRoute);
router.use('/teledrama/', TeledramaRoute);
router.use('/comment/', CommentRoute);
router.use('/amarakoon/founder/', founderRoute);
router.use('/amarakoon/images_galary/', foundationImage);

module.exports = router;
