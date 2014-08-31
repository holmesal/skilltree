'use strict'

###*
 # @ngdoc directive
 # @name skilltreeApp.directive:skills
 # @description
 # # skills
###
angular.module('skilltreeApp')
  .directive('skills', ($timeout) ->
    templateUrl: 'views/partials/skills.html'
    restrict: 'E'
    # replace: true
    link: (scope, element, attrs) ->
      # element.text 'this is the skills directive'
      v = 20

      scope.init = ->
        new Line

      $timeout scope.init, 0


      class Line 

        constructor: ->

          @positions = []

          @elem = angular.element element[0].children[0]

          @dims = 
            w: @elem.width()
            h: @elem.height()

          @s = Snap '#lineSvg'

          @drawFaded()

          @getPositions()

        drawFaded: ->
          @faded = @s.line @dims.w/2, 0, @dims.w/2, 0

          @faded.attr
            stroke: '#4A4A4A'
            opacity: 0.17
            strokeWidth: 0.5

          @faded.animate
            y2: @dims.h 
          , @dims.h * 1000 / v

        getPositions: ->
          @parentOffset = element[0].offsetTop
          console.log "parent offset is #{@parentOffset}"


          # Skip the first element - it's an SVG
          @positions = (elem.offsetTop for elem,idx in element[0].children[1].children)

          console.log @positions

          # Get last dot position
          @lastDot = @positions[@positions.length-1]

  )
