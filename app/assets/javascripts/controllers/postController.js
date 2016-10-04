app.controller('PostCtrl', ['PostService', '$scope', function(PostService, $scope){

  console.log("Post controller says hi")
  $scope.posts = PostService.getPosts();

}])