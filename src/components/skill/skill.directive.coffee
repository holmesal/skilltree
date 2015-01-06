angular.module 'skilltree'
.directive 'skill', ($stateParams, $document, $timeout, urlsafeFilter) ->
  templateUrl: 'components/skill/skill.jade'
  restrict: 'E'
  scope:
    skill: '='
  link: (scope, element, attrs) ->

    $timeout ->
      if $stateParams.scrollTo is urlsafeFilter scope.skill.name
        $document.scrollToElement element, 50, 2000


    scope.$watch 'skill.projects', (projects) ->
      scope.count = "#{projects.length} project"
      unless projects.length is 1
        scope.count += 's'
    , true