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

    scope.addHighlight = ->
      console.log 'adding highlight'
      scope.project.highlights.push {}