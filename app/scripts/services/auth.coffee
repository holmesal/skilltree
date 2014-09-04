'use strict'

###*
 # @ngdoc service
 # @name skilltreeApp.Auth
 # @description
 # # Auth
 # Service in the skilltreeApp.
###
angular.module('skilltreeApp')
  .service 'Auth', ->
    # AngularJS will instantiate a singleton by calling "new" on this function

    auth = 
      owner: 'alonso'
