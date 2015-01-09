angular.module 'skilltree'
  .directive 'highlight', ($stateParams) ->
    templateUrl: 'components/highlight/highlight.jade'
    scope: 
      highlight: '='
    restrict: 'E'
    link: (scope, element, attrs) ->

      # listen for edit mode
      scope.edit = $stateParams.edit

      scope.mode = 'text'

      scope.setMode = (mode) ->
        console.log 'mode set'
        scope.mode = mode

      scope.linkMode = ->
        scope.mode = 'link'

      # store a referece to the model on the scope, so we can flip back and forth between the displayed content (the parsed filename or folder name) and the editable url itself
      # scope.displayModel = scope.highlight.text
      # scope.$watch 'highlight.text', (txt) ->
      #   scope.displayModel = txt
      # if scope.edit
      #   scope.displayModel = scope.highlight.link
      # else
      #   scope.displayModel = scope.highlight.text

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