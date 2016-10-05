app.controller('PostShowCtrl', 
  ['PostService', '$scope', '$stateParams', 'Restangular',
  function(PostService, $scope, $stateParams, Restangular){

  console.log("Post.Show controller says hi")
  
  PostService.find($stateParams.postId)
    .then(function(response){
      $scope.post = response;
      console.log(response);
      console.log(response.comments)
      $scope.comments = response.comments;
    });

  $scope.commentParams = {
    
  }

  $scope.createComment = function(){
    $scope.post.createComment({
      author: $scope.commentParams.author,
      body: $scope.commentParams.body,
      postId: $stateParams.postId,
      vote : 0
    })
    .then(function(response){
      $scope.commentParams = {};
    })
  }
  

}]);