angular.module 'skilltree'
  .directive 'minimap', ($interval, $timeout, $window, MinimapAPI) ->
    restrict: 'E'
    templateUrl: 'components/minimap/minimap.jade'
    scope: {}
    link: (scope, elem, attrs) ->
      scope.elements = MinimapAPI.minimapElements
      
      scope.offsets = []


      # wait for the dom to calculate the offsets
      $timeout ->
        for section in elem[0].children
          scope.offsets.push section.offsetTop

      # elem.snabbt

      $timeout ->
        scope.focus = MinimapAPI.focus
        
      # when elements are populated, animate in the navigation
      # scope.$watch 'elements', (n, o) ->
      #   console.log elem.snabbt

        # console.log 'new'
        # console.log n
        # console.log 'old'
        # console.log o
        # unless o.length > 0
        #   # first load, animate in the nav
        #   console.log element

      # for the ghost hover state
      scope.setGhost = (index) ->
        scope.ghost = scope.offsets[index]
      scope.resetGhost = ->
        scope.ghost = null
      scope.getGhostOffset = ->
        return if scope.ghost then scope.ghost else scope.offsets[focus.index]