angular.module 'skilltree'
.directive 'project', ($window, $document, $stateParams, $timeout, urlsafeFilter) ->
  templateUrl: 'components/project/project.jade'
  restrict: 'E'
  scope:
    project: '='
    first: '='
  link: (scope, element, attrs) ->

    scope.edit = $stateParams.edit

    $timeout ->
      if $stateParams.scrollTo is urlsafeFilter scope.project.name
        if scope.first
          offset = 200
        else
          offset = 20
        $document.scrollToElement element, offset, 1000

    scope.goto = (url) ->
      $window.open url, '_blank'

    # This is necessary to prevent navigation on clicks in edit mode
    # Technically, we could wrap the highlight in a conditional anchor element, but it duplicates the highlight template, which fattens up a part of this controller that's not quite big enough to break into a directive
    scope.preventIfEdit = ($ev) ->
      $ev.preventDefault()

    scope.$watch 'project.highlights', (highlights) ->
      for highlight in highlights
        lastSegment = highlight.link.split('/').pop()
        if lastSegment.split('.').length > 1
          # return src.coffee
          highlight.type = 'file'
        else
          # return services/
          highlight.type = 'folder'