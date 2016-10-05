app.controller('PostCtrl', ['PostService', '$scope', function(PostService, $scope){

  console.log("Post controller says hi")

  PostService.all().then( function() {
    $scope.posts = PostService.get();
  })
  $scope.postParams = {};

  $scope.createPost = function() {
    $scope.posts.create($scope.postParams)
      .then(function(){
        $scope.postParams = {};
      });
  };
}])