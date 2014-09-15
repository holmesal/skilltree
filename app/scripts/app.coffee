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
        templateUrl: 'views/profile.html'
        controller: 'ProfileCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .otherwise
        redirectTo: '/'

  .run ($location) ->

