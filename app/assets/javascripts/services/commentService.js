app.factory('CommentService', ['Restangular', function(Restangular){

  var stub = {};

  stub.getComments = function(){
    return Restangular.all("comments").getList().$object;
  }

  return stub;


}])