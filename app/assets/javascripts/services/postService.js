app.factory('PostService', 
  ['Restangular', 'CommentService', 
  function(Restangular, CommentService){

  var stub = {};

  var _posts;

  var _createPost = function(params) {
    return Restangular.all("posts").post({
      post: {
        title: params.title,
        author: params.author,
        body: params.body
      }
    }).then(function(response) {
      _posts.unshift(response);
    })
  };

  Restangular.extendCollection('posts', function(collection){
    collection.create = _createPost;
    return collection;
  });

  Restangular.extendModel('posts', function(model) {

    // Create a method on the model
    // that will create an associated comment
    model.createComment = function(params) {

      // The model know's its own
      // ID so use it instead of
      // relying on params
      params.postId = model.id;
      console.log(params);

      // Return the result of the
      // service API call
      return CommentService.create(params)
        .then(function(response) {
          console.log(response);
          console.log("model: ", _posts);
          model.comments.push(response);
          
          return response;
        });
    };

    return model;
  });



  stub.all = function(){
    return Restangular.all("posts").getList()
      .then( function(response) {
        _posts = response;
    })
  };

  stub.get = function() {
    return _posts;
  }

  stub.find = function(id) {
    return Restangular.one("posts", id).get();
  };

  return stub;
}])