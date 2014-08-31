'use strict'

###*
 # @ngdoc directive
 # @name skilltreeApp.directive:projects
 # @description
 # # projects
###
angular.module('skilltreeApp')
  .directive('projects', ($timeout) ->
    templateUrl: 'views/partials/projects.html'
    restrict: 'E'
    scope: 
      projects: '='
      idx: '='
      visible: '='
      padding: '='
      velocity: '='
    link: (scope, element, attrs) ->

      scope.projectVisible = []

      scope.init = ->
        scope.line = new Line

      scope.$watch 'visible', (visible) ->
        console.log "visible changed to #{scope.visible}"
        if visible is true
          scope.line.draw()
        

      $timeout scope.init, 0


      class Line 

        constructor: ->

          @positions = []
          @dots = []

          @$elem = angular.element element.children()[0]
          console.log @$elem

          @dims = 
            w: @$elem.width()
            h: @$elem.height()

          @s = Snap "#svg-#{scope.idx}"

          @getPositions()

          # @s.circle @dims.w/2,@dims.h/2,@dims.w/2
          # If there's more than one project

          # Draw it!
          # $timeout => 
          #   @draw()
          # , dtop * 1000

        getPositions: ->
          @parentOffset = element[0].offsetTop
          console.log "parent offset is #{@parentOffset}"


          # Skip the first element - it's an SVG
          @positions = (elem.offsetTop for elem,idx in element[0].children when idx isnt 0)
          scope.projectVisible = (false for pos in @positions)

          # Get last dot position
          @lastDot = @positions[@positions.length-1]

        draw: ->
          # Show the dots
          for pos,idx in @positions
            # How long will it take the line to get here?
            delay = pos * 1000 / scope.velocity
            @showProject idx, delay

          # If there are more, draw the line
          if @positions.length > 1
            # Draw the line
            @showLine()


        showLine: ->
          @dark = @s.line @dims.w/2, scope.padding, @dims.w/2, scope.padding

          @dark.attr
            stroke: '#4A4A4A'
            opacity: 1.0
            strokeWidth: 0.5

          @dark.animate
            y2: @lastDot + scope.padding
          , @lastDot * 1000 / scope.velocity

        showProject: (idx, delay=0) ->
          # Wait
          $timeout =>
            # Draw the dot
            d = @dots[idx] = @s.circle @dims.w/2, @positions[idx] + scope.padding, 0
            # Orange
            d.attr 
              fill: '#E47D42'
            console.log "drawing dot at #{idx} -> #{@positions[idx]} with delay #{delay}"
            # Bounce
            d.animate
              r: 3.5
            , 500, mina.elastic

            # Set as visible
            scope.projectVisible[idx] = true
          , delay








  )
