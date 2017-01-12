'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.views.dashboard',
  'myApp.views.details',
  'myApp.version',
  'myApp.components.chevron'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

