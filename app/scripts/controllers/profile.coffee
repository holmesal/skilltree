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
            title: 'wavelength'
            description: 'Group communication. Fixed.'
            links:
              # code: 'https://github.com/holmesal/shortwave-web'
              site: 'wavelength.im'
          ,
            title: 'skilltree'
            description: 'Skill sheets for developers'
            links:
              code: 'https://github.com/holmesal/skilltree'
              site: 'skilltree.mtnlab.io'
          ,
            title: 'such fame'
            description: 'a famo.us/angular portfolio'
            links:
              code: 'https://github.com/holmesal/such-fame'
              site: 'famous.mtnlab.io'
        ]
      , 
        name: 'NodeJS'
        projects: [
            title: 'shortbot'
            description: 'Wavelength\'s message parser'
            links: {}
              # code: 'github.com/holmesal/wavelength-web'
          ,
            title: 'salute'
            description: 'Backend for an iBeacon-powered linkedin connector'
            links:
              # code: 'github.com/holmesal/salute-backend'
              site: 'salute.io'
          ,
            title: 'bifrost'
            description: 'Turn your Raspberry Pi into a Bluetooth Low Energy relay'
            links:
              code: 'https://github.com/robinpowered/bifrost'
              site: 'https://robinpowered.com/developers'
        ]
      ,
        name: 'Objective-C'
        projects: [{
            title: 'shortwave'
            description: 'A messaging app with a range of 70 feet'
            links:
              # code: 'github.com/holmesal/shortwave'
              site: 'itunes.apple.com/us/app/shortwave-messaging/id864480884?mt=8'
          }
        ]
    ]
