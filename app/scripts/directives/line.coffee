'use strict'

###*
 # @ngdoc directive
 # @name skilltreeApp.directive:line
 # @description
 # # line
###
angular.module('skilltreeApp')
  .directive('line', ->
    replace: true
    template: '<svg id="lineSvg"></svg>'
    restrict: 'E'
    link: (scope, element, attrs) ->
      # element.text 'this is the line directive'
      # scope.s = 

      # console.log element.width()

      v = 20


      class Line 

        constructor: ->

          @dims = 
            w: element.width()
            h: element.height()

          @s = Snap '#lineSvg'

          # @s.circle @dims.w/2,@dims.h/2,@dims.w/2

          @drawFaded()

        drawFaded: ->
          @faded = @s.line @dims.w/2, 0, @dims.w/2, 0

          @faded.attr
            stroke: '#4A4A4A'
            opacity: 0.17
            strokeWidth: 0.5

          @faded.animate
            y2: @dims.h 
          , @dims.h * 1000 / v

      new Line
  )
