'use strict'

###*
 # @ngdoc overview
 # @name skilltreeApp
 # @description
 # # skilltreeApp
 #
 # Main module of the application.
###
angular
  .module('skilltreeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/profile',
        templateUrl: 'views/profile.html'
        controller: 'ProfileCtrl'
      .otherwise
        redirectTo: '/'

