var FoundationImagesModel       = require("./FoundationImages.Model");
var DebugModuler                = require('../LogManager');
var fs                          = require("fs");

function FoundationImagesController() {
    /*
     * insert a new FoundationImage infomation
     */
    this.insertNewImage= function(data, callback) {
        var imageFile = data["url"];
        imageFile = imageFile.split(';base64,').pop();
        var timeStamp = Math.floor(Date.now() / 1000);
        var fileName = "public/images/Foundation/" + timeStamp + ".png";
        fs.writeFile(fileName, imageFile, 'base64', function(err) {
            data["url"] = "images/Foundation/" + timeStamp + ".png";
            FoundationImagesModel.create(data).then(function(status) {
                DebugModuler.info("new foundation detail added by " + data.processBy);
                callback(status);
            }).catch(function(err) {
                callback(err);
            })
        })
    };

    /*
     * update excisting FoundationImage
     */
    this.updateImageInfo = function(data, callback) {
        FoundationImagesModel.find({
            where: {
                id: data.id
            }
        }).then(function(instance) {
            var imageFile = data["url"];
            imageFile = imageFile.split(';base64,').pop();
            var timeStamp = Math.floor(Date.now() / 1000);
            var fileName = "public/images/Foundation/" + timeStamp + ".png";
            fs.writeFile(fileName, imageFile, 'base64', function(err) {
                instance.update({
                    description: data.description,
                    url: "images/Foundation/" + timeStamp + ".png"
                }).then(function(result) {
                    DebugModuler.warn("FoundationImage  " + instance.id + " has updated by " + data.processBy);
                    callback(result);
                }).catch(function(err) {
                    callback(err);
                })
            });
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search all FoundationImages info
     */
    this.searchAllImageInfo = function(data, callback) {
        FoundationImagesModel.findAll().then(function(result) {
            DebugModuler.info("All images has searched by " + data.processBy);
            result.forEach(function(image) {
                image["url"] = new Buffer(fs.readFileSync("public/"+image["url"])).toString('base64');
            })
            callback(result);
        }).catch(function(err) {
            callback(err);
        })
    };

    /*
     * search individual Image
     */
    this.searchImageIndividual = function(data, callback) {
        FoundationImagesModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            DebugModuler.info("Image "+ result.id + " has searched by " + data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };

    /*
     * delete image
     */
    this.deleteImage = function(data, callback) {
        FoundationImagesModel.find({
            where: {
                id: data.id
            }
        }).then(function(result) {
            result.destroy();
            DebugModuler.warn("Image  "+result.id + " has deleted by "+ data.processBy);
            callback(result);
        }).catch(function (err) {
            callback(err);
        })
    };
}

module.exports = new FoundationImagesController();