angular.module 'skilltree'
  .directive 'minimapElement', (MinimapAPI) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      console.log "minimap directive: #{attrs.minimapElement} (#{attrs.minimapCount})"

      minimapElement = MinimapAPI.registerElement
        name: attrs.minimapElement
        count: attrs.minimapCount

      console.log minimapElement

      # when scroll happens
      # minimapElement.setFocus()

