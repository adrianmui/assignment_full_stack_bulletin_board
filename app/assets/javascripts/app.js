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

app.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

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
            controller: 'PostCtrl',
            templateUrl: '/templates/posts/index.html'
          }
        }
      });

}]);