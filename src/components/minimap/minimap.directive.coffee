angular.module 'skilltree'
  .directive 'minimap', () ->
    restrict: 'E'
    templateUrl: 'components/minimap/minimap.html'
    scope:
      elements: '='
    link: (scope, elem, attrs) ->
      # bind to an array of elements
      # look up those elements to get
      # set a minimap="AngularJS" tag on every element you want to track
      # and a minimap-count="5" to count the subsections
      # then this directive needs to somehow know about those other directives, and be able to pull them in. hmm....

      # fake data for now to evaluate rendering speed
      scope.fakeSkills = []

      for num in [1...20]
        rand = Math.round Math.random()*10
        scope.fakeSkills.push
          name: "FakeJS#{rand}"
          skills: [1..rand]

      console.log scope.fakeSkills