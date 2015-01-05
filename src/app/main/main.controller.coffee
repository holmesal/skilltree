angular.module "skilltree"
  .controller "MainCtrl", ($scope, $window, $stateParams) ->

    # show or hide the minimap based on a query param
    $scope.showMinimap = $stateParams.minimap

    $scope.height = $window.innerHeight

    $scope.person =
      name: 'Alonso Holmes'
      photo: 'https://avatars3.githubusercontent.com/u/1147390?v=3&s=460'
    
    $scope.skills = [
      name: 'AngularJS'
      projects: [
        name: 'Hashtag'
        description: 'Realtime, IRC-like chat app'
        source: 'http://github.com/holmesal/shortwave-web'
        highlights: [
          file: 'user.coffee'
          description: 'Firebase authentication service - this binds the app state to Firebase\'s event-based login/logout scheme.'
        ,
          file: 'composebar.coffee'
          description: 'Custom composebar directive with support for file uploads.'
        ]
      ]
    ,
      name: 'NodeJS'
      projects: []
    ]

    for num in [1...7]
      $scope.skills[0].projects.push angular.copy $scope.skills[0].projects[0]

    for num in [1...9]
      $scope.skills[1].projects.push angular.copy $scope.skills[0].projects[0]