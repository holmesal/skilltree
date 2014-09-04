'use strict'

###*
 # @ngdoc directive
 # @name skilltreeApp.directive:focusOn
 # @description
 # # focusOn
###
angular.module('skilltreeApp')
  .directive('focusOn', ($timeout) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      scope.$on 'focusOn', (e, name) ->
        console.log 'got focus on event!'
        if name is attrs.focusOn
          console.log "focusing #{name}"
          $timeout ->
            element[0].focus()
          , 10
  )
