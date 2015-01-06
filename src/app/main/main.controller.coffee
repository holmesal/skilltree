angular.module "skilltree"
  .controller "MainCtrl", ($scope, $window, $document, $stateParams) ->

    # show or hide the minimap based on a query param
    $scope.showMinimap = $stateParams.minimap

    # console.log $stateParams

    $scope.height = $window.innerHeight

    last = Date.now()

    $scope.$watch ->
      $document.height()
    , (height) ->
      console.log "height changed to #{height}, has been #{Date.now() - last}"
      last = Date.now()

    $scope.person =
      name: 'Alonso Holmes'
      photo: 'https://avatars3.githubusercontent.com/u/1147390?v=3&s=460'
    
    $scope.skills = [
      name: 'AngularJS'
      projects: [
        name: 'Hashtag'
        description: 'Realtime, IRC-like chat app'
        source: 'http://github.com/holmesal/hashtag'
        highlights: [
          link: 'https://github.com/holmesal/hashtag/blob/develop/Gruntfile.js#L695'
          description: '1-command desktop app releases with node-webkit and amazon s3.'
        ,
          link: 'https://github.com/holmesal/hashtag/blob/develop/desktop/launcher.coffee'
          description: 'Node-Webkit desktop app auto-updater and launcher. Watches for new releases, and downloads and unpacks them.'
        ,
          link: 'https://github.com/holmesal/hashtag/blob/develop/app/scripts/app.coffee'
          description: 'Routes wait to resolve until firebase authentication fires (or errors), and the required data is fetched and injected into the controller.'
        ,
          link: 'https://github.com/holmesal/hashtag/blob/develop/app/scripts/directives/autocomplete.coffee'
          description: '@mention directive slides up an interface when the user types "@", allowing you to key through people in the room.'
        ,
          link: 'https://github.com/holmesal/hashtag/blob/develop/app/scripts/services/user.coffee'
          description: 'Custom composebar directive with support for file uploads.'
        ]
        extras: ['node-webkit', 'grunt', 'coffeescript', 'sass', 'firebase']
      ,
        name: 'Switchboard'
        description: 'Sample-management and publishing software for the Teenage Engineering OP-1'
        source: 'https://github.com/holmesal/switchboard'
        highlights: [
          link: 'https://github.com/holmesal/switchboard/blob/master/gulp/atom.js'
          description: 'Gulp workflow for relaunching an instance of Atom-Shell if files related to the shell change. The angular app running inside Atom-Shell still livereloads using the normal browsersync gulp workflow.'
        ,
          link: 'https://github.com/holmesal/switchboard/tree/master/src/components/freespace'
          description: 'Directive to visually represent the number of synths and samples loaded, and the available slots remaining. The basis for fa-meter.'
        ]
        extras: ['Atom-Shell', 'Gulp']
      ,
        name: 'Firesolver'
        description: 'Directive to make route changes contingent on firebase.'
        source: 'https://github.com/holmesal/firesolver'
        highlights: [
          link: 'https://github.com/holmesal/firesolver/blob/master/firesolver.coffee'
          description: '$q promises are used to wait for authentication and/or data from a specific firebase location, and then either abort the route change or complete it. If completed, the authenticated user and/or data is injected into the controller.'
        ]
        extras: ['CoffeeScript']
      ,
        name: 'Skilltree'
        description: 'A guided tour of your github account. The website you\'re looking at.'
        source: 'http://github.com/holmesal/skilltree'
        highlights: [
          link: 'https://github.com/holmesal/skilltree/tree/master/src/components/minimap'
          description: 'A side-mounted nav (inspired by Sublime Text\'s "minimap") that allows you to quickly jump around a page. Toggle it by adding "?minimap=true" to your url.'
        ]
      ]
    ,
      name: 'Famo.us'
      projects: [
        name: 'fa-meter'
        description: 'Angular directive for famo.us-powered annotated meters.'
        source: 'https://github.com/holmesal/fa-meter'
        highlights: [
          link: 'https://github.com/holmesal/fa-meter/blob/master/src/fa-meter.jade#L61'
          description: 'Lots of transitionables for fine-grained control of every aspect of the animation and presentation.'
        ,
          link: 'https://github.com/holmesal/fa-meter/blob/master/src/fa-meter.coffee#L58'
          description: 'Famo.us/anuglar $timeline service for controlling multiple animations with a single transitionable.'
        ]
        extras: ['AngularJS', 'Gulp', 'Jade', 'SASS', 'CoffeeScript']
      ,
        name: 'Personal Portfolio'
        description: 'A famo.us-powered portfolio of personal projects, at alonso.io'
        source: 'https://github.com/holmesal/such-fame'
        highlights: [
          link: 'https://github.com/holmesal/such-fame/blob/master/Gruntfile.js#L345'
          description: 'Using $templateCache to cut down on the number of HTTP requests made when the page loads, which can interfere with the render loop.'
        ,
          link: 'https://github.com/holmesal/such-fame/blob/master/app/scripts/controllers/main.coffee#L251'
          description: 'Project "bubbles" are attached to the center and corner anchor points by springs of varying stiffnesses and unstretched lengths.'
        ,
          link: 'https://github.com/holmesal/such-fame/blob/master/app/scripts/controllers/main.coffee#L744'
          description: 'Here, native ngAnimate behavior kicks off a famo.us transitionable .set() call.'
        ,
          link: 'https://github.com/holmesal/such-fame/blob/master/app/views/main.html'
          description: 'The main template, and a candidate for directive-ization.'
        ]
        extras: ['AngularJS', 'SASS', 'Grunt']
      ,
        name: 'awesome-seed'
        description: 'a seed project for angular + famo.us apps'
        source: 'https://github.com/holmesal/awesome-seed'
        highlights: [
          link: 'https://github.com/holmesal/awesome-seed/blob/master/src/app/main/main.controller.coffee#L41'
          description: 'UI-Router calls $enter and $leave controller methods, which use famo.us transitionables to animate state changes.'
        ]
        extras: ['AngularJS', 'Sheets', 'SASS', 'CoffeeScript', 'Gulp', 'Jade']
      ]
    ,
      name: 'NodeJS'
      projects: [
        name: 'Fireman'
        description: 'Easy push notifications for Firebase-powered apps.'
        source: 'https://github.com/holmesal/fireman'
        highlights: [
          link: 'https://github.com/holmesal/fireman/blob/master/server.coffee'
          description: 'Fireman listens to a `pushQueue` at the root of your firebase. Any time an notification object is pushed into the queue, a push notification is sent to the appropriate device.'
        ]
        extras: ['Dokku', 'CoffeScript']
      ,
        name: 'rbn-pi'
        description: 'A daemon designed to run on a raspberry pi and stream data from connected USB and Bluetooth devices.'
        source: 'https://github.com/holmesal/bifrost'
        highlights: [
          link: 'https://github.com/holmesal/bifrost/blob/master/config.json'
          description: 'You can require modules like rbn-ble to listen to bluetooth devices, or rbn-websocket to use websockets as a transport layer.'
        ,
          link: 'https://github.com/holmesal/bifrost/blob/master/rbn-pi.coffee'
          description: 'Entry point. Keeps an eye on the github releases page, and downloads any new updates autonomously. Auto-updating is especially important when you\'re doing things like encasing Raspberry Pis in concrete walls.'
        ]
        extras: ['Raspberry Pi']
      ,
        name: 'Marvin the Robot'
        description: 'A depressed, trash-picking-up robot powered by genetic algorithms.'
        source: 'https://github.com/holmesal/marvintherobot'
        highlights: [
          link: 'https://github.com/holmesal/marvintherobot/blob/master/src/marvin.litcoffee'
          description: 'The annotated source. Describes the genome, and the fitness function used to evolve it.'
        ]
        extras: ['Literate CoffeeScript', 'Genetic Algorithms']
      ,
        name: 'Stream backend'
        description: 'Backend for a simple microblogging platform.'
        source: 'https://github.com/holmesal/stream-backend'
        highlights: [
          link: 'https://github.com/holmesal/stream-backend/blob/master/models.coffee'
          description: 'Simple mongoose models'
        ,
          link: 'https://github.com/holmesal/stream-backend/blob/master/server.coffee'
          description: 'Routes and middleware.'
        ]
        extras: ['Express', 'MongoDB', 'Mongoose', 'CoffeeScript']
      ]
    ,
      name: 'Python'
      projects: [
        name: 'Wanderlust'
        description: 'Rasterizes data from Open Street Maps to a game map.'
        source: 'https://github.com/holmesal/wanderlust'
        highlights: [
          link: 'https://github.com/holmesal/wanderlust/blob/master/osm.py'
          description: 'Queries Open Street Maps for specific types of entites (roads, buildings, etc), and rasterizes the response into a 1m-resolution grid.'
        ,
          link: 'https://github.com/holmesal/wanderlust/blob/master/getdata.py#L23'
          description: 'Geohashes are used to project vector data (in latitude/longiture or UTM) onto discrete "blocks" for use in-game.'
        ]
        extras: ['Google App Engine', 'Open Street Maps']
      ]
    # ,
    #   name: 'Objective-C'
    #   projects: [
    #     name: 'wtfBeacon'
    #     description: 'Links iOS devices in the background.'
    #     source: 'https://gist.github.com/holmesal/104d1248482ee9caec44'
    #     highlights: [
    #       link: 'https://medium.com/@alonsoholmes/wtfbeacon-how-shortwave-works-e926813091af'
    #       description: 'Blog post on how wtfBeacon works.'
    #     ]
    #   ]
    ]

    # for num in [1...7]
    #   $scope.skills[0].projects.push angular.copy $scope.skills[0].projects[0]

    # for num in [1...9]
    #   $scope.skills[1].projects.push angular.copy $scope.skills[0].projects[0]

    for skill in $scope.skills
      for project in skill.projects
        for highlight in project.highlights
          # catch line numbers
          lnum = highlight.link.indexOf '#L'
          highlight.text = highlight.link
          unless lnum is -1
            # console.log lnum
            highlight.text = highlight.link.substring 0, lnum
            highlight.line = highlight.link.substring lnum + 2
            # console.log highlight.line
            # console.log highlight.link