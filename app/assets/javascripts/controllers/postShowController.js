app.controller('PostShowCtrl', 
  ['PostService', '$scope', '$stateParams',
  function(PostService, $scope, $stateParams){

  console.log("Post.Show controller says hi")
  
  PostService.findPost($stateParams.postId)
    .then(function(response){
      $scope.post = response;
      console.log($scope.post);
      console.log($scope.post.comments); 
    });

  $scope.commentParams = {
    postId: $stateParams.postId
  }

  

 
  $scope.createComment = function(){
    $scope.post.comments.create({
      author: $scope.commentParams.author,
      body: $scope.commentParams.body,
    })
    .then(function(response){
      $scope.post.comments.unshift(response);
      $scope.commentParams.author = "";
      $scope.commentParams.body = "";
    })
  }
  

}]);