angular.module 'skilltree'
  .directive 'minimapElement', ($document, $window, $timeout, MinimapAPI) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      # console.log "minimap directive: #{attrs.minimapElement} (#{attrs.minimapCount})"

      # create the element
      minimapElement = MinimapAPI.registerElement
        name: attrs.minimapElement
        count: attrs.minimapCount
        element: element
        
      # watch scroll
      angular.element $window
        .bind 'scroll', (ev) ->
          center = $window.scrollY + 200
          if center > element[0].offsetTop and center < element[0].offsetTop + element[0].offsetHeight
            # console.log attrs.minimapElement
            minimapElement.update()
            scope.$apply()

