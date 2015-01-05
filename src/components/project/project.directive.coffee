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