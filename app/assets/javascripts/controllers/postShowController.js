app.controller('PostShowCtrl', 
  ['PostService', '$scope', '$stateParams',
  function(PostService, $scope, $stateParams){

  console.log("Post.Show controller says hi")
  
  $scope.post = PostService.findPost($stateParams.postId);
  //array
  $scope.comments = $scope.post.comments;

  console.log($scope.post);

  

}]);