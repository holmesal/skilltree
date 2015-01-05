angular.module 'skilltree'
.directive 'skill', () ->
  templateUrl: 'components/skill/skill.html'
  restrict: 'E'
  scope:
    skill: '='
  link: (scope, element, attrs) ->

    scope.$watch 'skill.projects', (projects) ->
      scope.count = "#{projects.length} project"
      unless projects.length is 1
        scope.count += 's'
    , true