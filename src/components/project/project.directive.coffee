angular.module 'skilltree'
.directive 'project', () ->
  templateUrl: 'components/project/project.html'
  restrict: 'E'
  scope:
    project: '='
  link: (scope, element, attrs) ->

    console.log 'what does this directive actually need to do? handle editing.'