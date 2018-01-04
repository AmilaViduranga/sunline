var CommentModel    =   require("./Comment.Model");

function CommentController() {
    /*
     * insert new comment
     * */
    this.insertNewComment = function(data, callback) {
        CommentModel.create(data).then(function(status) {
            callback(status);
        }).catch(function(err) {
            callback(err);
        })
    }

    /*
     * get all comments
     * */
    this.getAllComments = function(callback) {
        CommentModel.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(function(data) {
            callback(data);
        }).catch(function(err) {
            callback(err);
        })
    }
}

module.exports = new CommentController();