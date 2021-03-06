angular.module "skilltree", [
  'ngAnimate'
  'ngCookies'
  'ngTouch'
  'ngSanitize'
  'restangular'
  'ui.router'
  'ui.bootstrap'
  'duScroll'
  'angular-medium-editor']
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    $stateProvider
      .state "home",
        url: "/:scrollTo?edit",
        templateUrl: "app/main/main.jade",
        controller: "MainCtrl"

    $urlRouterProvider.otherwise '/'

    $locationProvider.html5Mode true

  .run () ->
    FastClick.attach document.body

