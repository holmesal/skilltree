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

    $scope.person = 
      photo: 'https://avatars3.githubusercontent.com/u/1147390?v=2&s=460'
      name: 'Alonso Holmes'

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
          ,
            title: 'skilltree'
            description: 'Skill sheets for developers'
            links:
              code: 'http://google.com'
              site: 'skilltree.io'
          ,
            title: 'skilltree'
            description: 'Skill sheets for developers'
            links:
              code: 'http://google.com'
              site: 'skilltree.io'
        ]
      , 
        name: 'Swift'
        projects: [{
            title: 'orbiter'
            description: 'A proximity-enabled bitcoin wallet'
            links:
              code: 'test'
              site: 'orbiter.io'
          }
        ]
    ]
