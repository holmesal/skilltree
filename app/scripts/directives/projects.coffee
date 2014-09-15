'use strict'

###*
 # @ngdoc directive
 # @name skilltreeApp.directive:projects
 # @description
 # # projects
###
angular.module('skilltreeApp')
  .directive('projects', ($timeout, $rootScope, Auth) ->
    templateUrl: 'views/partials/projects.html'
    restrict: 'E'
    scope: 
      projects: '='
      idx: '='
      shown: '='
      padding: '='
      velocity: '='
    link: (scope, element, attrs) ->

      scope.projectVisible = []

      # Show the 'add project' dialog
      scope.showAdd = false

      scope.init = ->
        scope.line = new Line

      scope.$watch 'shown', (shown) ->
        console.log "shown changed to #{scope.shown}"
        if shown is true
          scope.line.draw()
      , true

      scope.$watch 'showAdd', (showAdd) =>
        if showAdd isnt undefined and scope.line
          # Rotate the plus
          scope.line.rotatePlus()
          # Set focus if necessary
          if showAdd
            scope.$broadcast 'focusOn', 'repoName'


      # Need to hop on the next $digest for some reason
      $timeout scope.init, 100


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

            # If the owner is logged in and this is the last item, it's an add directive, so draw the plus instead
            if idx is @positions.length - 1 and Auth.owner
              @showPlus @positions[idx]

            # Set as visible
            scope.projectVisible[idx] = true

          , delay


        showPlus: (pos) ->
            # Draw the plus
            Snap.load 'images/plus.svg', (f) =>
              # Add to dom
              @plus = f.select 'g'
              @plus.attr
                class: 'plus'
              @s.append @plus
              # Offset by a bit
              @plusBox = @plus.getBBox()
              offset = (@dims.w/2)-(@plusBox.width/2) - 1 # jank pixel
              # Move
              @plusTransform = "t#{offset},#{pos}"
              @plus.transform @plusTransform
              # Handle clicks
              @plus.click =>
                scope.$apply =>
                  scope.showAdd = !scope.showAdd

        rotatePlus: ->
          rotation = if scope.showAdd then 45 else 0
          @plus.animate
            transform: "#{@plusTransform} r#{rotation},#{(@plusBox.width/2)},#{@plusBox.height/2}"
          , 200













  )
