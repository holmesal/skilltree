angular.module 'skilltree'
  .directive 'minimap', ($interval, $timeout, $window, MinimapAPI) ->
    restrict: 'E'
    templateUrl: 'components/minimap/minimap.jade'
    scope: {}
    link: (scope, elem, attrs) ->
      console.log MinimapAPI
      scope.elements = MinimapAPI.minimapElements
      scope.focusIndex = MinimapAPI.focusIndex
      scope.focus = MinimapAPI.focus
      scope.offsets = []

      # console.log scope.focusIndex

      scope.$watch 'focus', ->
        console.log scope.focus
        console.log 'focus test' + scope.focus.index
      , true

      # $interval ->
      #   console.log "scope.focusIndex = #{scope.focusIndex}"
      # , 1000

      # wait for the dom to calculate the offsets
      $timeout ->
        for section in elem[0].children
          scope.offsets.push section.offsetTop

        # console.log scope.offsets