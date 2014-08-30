'use strict'

###*
 # @ngdoc function
 # @name skilltreeApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the skilltreeApp
###
angular.module('skilltreeApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
