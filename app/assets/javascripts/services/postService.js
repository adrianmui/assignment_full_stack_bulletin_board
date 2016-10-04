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
  }

  return stub;


}])