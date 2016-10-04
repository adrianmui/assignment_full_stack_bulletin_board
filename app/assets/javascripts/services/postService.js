app.factory('PostService', ['Restangular', function(Restangular){

  var stub = {};

  var _createPost = function(params) {
    return Restangular.all("posts").post({
      post: {
        title: params.title,
        author: params.author,
        body: params.body
      }
    })
  };

  Restangular.extendCollection('posts', function(collection){
    collection.create = _createPost;
    return collection;
  });

  stub.getPosts = function(){
    return Restangular.all("posts").getList().$object;
  };

  stub.findPost = function(id) {
    return Restangular.one("posts", id).get().$object;
  };

  return stub;


}])