'use strict'

###*
 # @ngdoc function
 # @name skilltreeApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the skilltreeApp
###
angular.module('skilltreeApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
