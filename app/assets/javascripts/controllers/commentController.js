app.controller('CommentCtrl', 
  ['$scope', 'CommentService',
  function($scope, CommentService){

  console.log("Comment controller says hi");
  $scope.comments = CommentService.getComments();

}])