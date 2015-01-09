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

    # scope.$watch 'project.highlights', (highlights) ->
    #   for highlight in highlights
    #     lastSegment = highlight.link.split('/').pop()
    #     if lastSegment.split('.').length > 1
    #       # return src.coffee
    #       highlight.type = 'file'
    #     else
    #       # return services/
    #       highlight.type = 'folder'