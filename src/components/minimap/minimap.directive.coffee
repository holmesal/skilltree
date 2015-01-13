angular.module 'skilltree'
  .directive 'minimap', ($interval, $timeout, $window, MinimapAPI) ->
    restrict: 'E'
    templateUrl: 'components/minimap/minimap.jade'
    scope: {}
    link: (scope, elem, attrs) ->
      scope.elements = MinimapAPI.minimapElements
      
      scope.offsets = []

      scope.setFocus = (element) ->
        element.setFocus()
        ga('send', 'event', 'button', 'navClick', element.name)


      # wait for the dom to calculate the offsets
      $timeout ->
        for section in elem[0].children
          scope.offsets.push section.offsetTop

      $timeout ->
        scope.focus = MinimapAPI.focus

      # for the ghost hover state
      scope.setGhost = (index) ->
        scope.ghost = scope.offsets[index]
      scope.resetGhost = ->
        scope.ghost = null
      scope.getGhostOffset = ->
        return if scope.ghost then scope.ghost else scope.offsets[focus.index]