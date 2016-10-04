app.factory('PostService', ['Restangular', function(Restangular){

  var stub = {};

  stub.getPosts = function(){
    return Restangular.all("posts").getList().$object;
  }

  return stub


}])