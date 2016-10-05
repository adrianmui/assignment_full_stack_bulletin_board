app.controller('CommentCtrl', 
  ['$scope', 'CommentService',
  function($scope, CommentService){

  console.log("Comment controller says hi");
  
  CommentService.all().then( function(){
    $scope.comments = CommentService.get();
  });

}])