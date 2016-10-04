app = angular.module('app', 
  ['ui.router', 'restangular']);

// Service for Lodash/Underscore
app.factory('_', ['$window', function($window) {
  return $window._;
}]);

// CSRF support
app.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
}]);

// uirouter
app.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('posts', {
        url: '',
        views: {
          "index": {
            
            templateUrl: '/templates/posts/index.html'
          }
        }
      });

}]);