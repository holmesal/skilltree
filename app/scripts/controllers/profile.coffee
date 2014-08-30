'use strict'

###*
 # @ngdoc function
 # @name skilltreeApp.controller:ProfileCtrl
 # @description
 # # ProfileCtrl
 # Controller of the skilltreeApp
###
angular.module('skilltreeApp')
  .controller 'ProfileCtrl', ($scope) ->
    $scope.skills = [
        name: 'AngularJS'
        projects: [
            title: 'shortwave'
            description: 'Group communication. Fixed.'
            links:
              code: 'http://google.com'
              site: 'getshortwave.com'
          ,
            title: 'skilltree'
            description: 'Skill sheets for developers'
            links:
              code: 'http://google.com'
              site: 'skilltree.io'
        ]
      , 
        name: 'NodeJS'
        projects: [
            title: 'shortbot'
            description: 'Shortwave\'s message parser'
            links:
              code: 'http://google.com'
        ]
    ]
