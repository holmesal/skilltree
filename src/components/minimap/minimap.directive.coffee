angular.module 'skilltree'
  .directive 'minimap', ($interval, $window, MinimapAPI) ->
    restrict: 'E'
    templateUrl: 'components/minimap/minimap.jade'
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
        skills = ['AngularJS', 'Firebase', 'NodeJS', 'Python', 'MongoDB', 'Express', 'PHP', 'Objective-C', 'Swift', 'Squirrel']
        scope.fakeSkills.push
          name: if num > 1 then skills[rand] else 'AngularJS'
          projects: [1..rand]

      interval = 2000

      lastPos = 0

      scope.offset = 0

      # $interval ->


      angular.element $window
        .bind 'scroll', (ev) ->
          newPos = -$window.scrollY
          scope.offset = newPos/10
          console.log "scroll to #{newPos}"
          scope.$apply ->
          # angular.element(elem[0].children[0]).snabbt
          #   position: [0,newPos,0]
          #   from_position: [0,lastPos,0]
          #   duration: 20
          #   easing: 'ease'
          # lastPos = newPos
        # , interval
          # console.log 'omg did scroll'
          # console.log $window.scrollY

      # scope.$watch ->
      #   console.log 'checking'
      #   $window.screenTop
      # , (newY) ->
      #   console.log "scrolled to #{newY}"
      # , true

