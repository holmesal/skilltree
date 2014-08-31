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
    link: (scope, element, attrs) ->

      padding = 13

      v= 20

      mtop = 110

      dtop = (110 + padding) / v


      scope.init = ->
        new Line
        

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
          $timeout => 
            @draw()
          , dtop * 1000

        getPositions: ->
          @parentOffset = element[0].offsetTop
          console.log "parent offset is #{@parentOffset}"


          # Skip the first element - it's an SVG
          @positions = (elem.offsetTop for elem,idx in element[0].children when idx isnt 0)

          # Get last dot position
          @lastDot = @positions[@positions.length-1]

        draw: ->

          # Draw the first dot
          # @showDot 0

          # If there are more, show them while drawing the line
          if @positions.length > 1
            # Draw the line
            @showLine()
            # Show the dots
            for pos,idx in @positions
              # How long will it take the line to get here?
              delay = pos * 1000 / v
              @showDot idx, delay


        showLine: ->
          @dark = @s.line @dims.w/2, padding, @dims.w/2, padding

          @dark.attr
            stroke: '#4A4A4A'
            opacity: 1.0
            strokeWidth: 0.5

          @dark.animate
            y2: @lastDot + padding
          , @lastDot * 1000 / v

        showDot: (idx, delay=0) ->
          # Draw
          $timeout =>
            d = @dots[idx] = @s.circle @dims.w/2, @positions[idx] + padding, 0
            # Orange
            d.attr 
              fill: '#E47D42'
            console.log "drawing dot at #{idx} -> #{@positions[idx]} with delay #{delay}"
            # Bounce
            d.animate
              r: 3.5
            , 500, mina.elastic
          , delay








  )
