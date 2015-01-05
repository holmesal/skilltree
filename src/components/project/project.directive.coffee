angular.module 'skilltree'
.directive 'project', ($window) ->
  templateUrl: 'components/project/project.html'
  restrict: 'E'
  scope:
    project: '='
  link: (scope, element, attrs) ->

    console.log 'what does this directive actually need to do? handle editing.'

    scope.open = (url) ->
      $window.open url, '_blank'

    scope.$watch 'project.highlights', (highlights) ->
      for highlight in highlights
        lastSegment = highlight.link.split('/').pop()
        if lastSegment.split('.').length > 1
          # return src.coffee
          highlight.type = 'file'
        else
          # return services/
          highlight.type = 'folder'