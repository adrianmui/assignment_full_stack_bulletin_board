app.factory('CommentService', ['Restangular', function(Restangular){

  var stub = {};

  var _comments;

  var _createComment = function(params) {
  
    return Restangular.all("comments").post({
      comment: {
        author: params.author,
        body: params.body,
        post_id: params.postId,
        vote: params.vote
        }
      }).then( function(response) {

        _comments.unshift(response);
        return response;
      });
  };

  Restangular.extendCollection('comments', function(collection){
    collection.create = _createComment;
    return collection;
  });

  Restangular.restangularizeCollection(
    "post", "post.comments", 'comments');


  stub.all = function(){
    return Restangular.all("comments").getList()
      .then( function(response) {
        _comments = response;
    });
  };

  stub.create = function(params) {
    return _createComment(params);
  }

  stub.get = function() {
    return _comments;
  }

  return stub;


}])