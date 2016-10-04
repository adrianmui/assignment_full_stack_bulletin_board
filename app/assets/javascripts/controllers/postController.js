app.controller('PostCtrl', ['PostService', '$scope', function(PostService, $scope){

  console.log("Post controller says hi")
  $scope.posts = PostService.getPosts();
  $scope.postParams = {};

  $scope.createPost = function() {
    $scope.posts.create($scope.postParams)
      .then(function(response){
        $scope.posts.unshift(response);
        $scope.postParams = {};
      });
  }

}])