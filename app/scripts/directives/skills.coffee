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
    # scope: true
    link: (scope, element, attrs) ->
      # element.text 'this is the skills directive'

      scope.shown = []

      scope.mtop = 110
      scope.padding = 13
      scope.velocity = 420

      console.info 'new skills directive'

      scope.setup = ->
        # console.info 'new line!'
        new Line

      $timeout scope.setup, 1000


      class Line 

        constructor: ->

          @positions = []
          scope.shown = []

          @elem = angular.element element[0].children[0]

          @dims = 
            w: @elem.width()
            h: @elem.height()

          @s = Snap '#lineSvg'

          @drawFaded()

          @getPositions()

          # Set up the show timers
          for pos,idx in @positions 
            delay = (pos+scope.mtop+scope.padding) * 1000 / scope.velocity
            @showSkill idx, delay


        drawFaded: ->
          @faded = @s.line @dims.w/2, 0, @dims.w/2, 0

          @faded.attr
            stroke: '#4A4A4A'
            opacity: 0.5#0.17
            strokeWidth: 0.5

          @faded.animate
            y2: @dims.h 
          , @dims.h * 1000 / scope.velocity

        showSkill: (idx, delay=0) ->
          $timeout ->
            console.info 'showing skill!'
            console.log scope.shown
            console.log idx
            scope.shown[idx] = true
            console.log scope.shown
            scope.$apply ->
          , delay


        getPositions: ->
          @parentOffset = element[0].offsetTop
          console.log "parent offset is #{@parentOffset}"


          # Skip the first element - it's an SVG
          elems = element[0].children[1].children
          @positions = (elem.offsetTop for elem,idx in elems)
          scope.shown = (false for pos in @positions)

          console.log @positions
          console.log 'shown: '
          console.log scope.shown

          # Get last dot position
          @lastDot = @positions[@positions.length-1]

  )
