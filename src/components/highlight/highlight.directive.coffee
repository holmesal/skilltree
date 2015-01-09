angular.module 'skilltree'
  .directive 'highlight', ($stateParams) ->
    templateUrl: 'components/highlight/highlight.jade'
    scope: 
      highlight: '='
    restrict: 'E'
    link: (scope, element, attrs) ->

      # listen for edit mode
      scope.edit = $stateParams.edit

      # This is necessary to prevent navigation on clicks in edit mode
      # Technically, we could wrap the highlight in a conditional anchor element, but it duplicates the highlight template, which fattens up a part of this controller that's not quite big enough to break into a directive
      scope.preventIfEdit = ($ev) ->
        # hack to still allow clicks on the side element. definitely a better way to do this.
        if scope.edit and $ev.target.classList[0] not in ['button', 'fa']
          console.log 'preventing'
          $ev.preventDefault()

      # any time the highlight link changes, try to figure out what it is
      scope.$watch 'highlight.link', (link) ->
        lastSegment = link.split('/').pop()
        if lastSegment.split('.').length > 1
          scope.highlight.type = 'file'
          scope.highlight.text = lastSegment
        else
          scope.highlight.type = 'folder'
          scope.highlight.text = "#{lastSegment}/"