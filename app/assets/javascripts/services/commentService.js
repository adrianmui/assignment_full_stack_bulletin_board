app.factory('CommentService', ['Restangular', function(Restangular){

  var stub = {};

  var _createComment = function(params) {
    return Restangular.all("comments").post({
      comment: {
        author: params.author,
        body: params.body,
        post_id: params.postId,
        vote: 0
      }
    })
  };

  Restangular.extendCollection('comments', function(collection){
    collection.create = _createComment;
    return collection;
  });

  stub.getComments = function(){
    return Restangular.all("comments").getList().$object;
  }

  return stub;


}])