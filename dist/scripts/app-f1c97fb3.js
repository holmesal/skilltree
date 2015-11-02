(function(){}).call(this),function(){angular.module("skilltree",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","ui.bootstrap","duScroll","angular-medium-editor"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,i){return t.state("home",{url:"/:scrollTo?edit",templateUrl:"app/main/main.jade",controller:"MainCtrl"}),e.otherwise("/"),i.html5Mode(!0)}]).run(function(){return FastClick.attach(document.body)})}.call(this),function(){angular.module("skilltree").filter("urlsafe",function(){return function(t){var e;return e=t.replace(" ","-"),e.toLowerCase().replace(/[^a-zA-Z0-9-_]/g,"")}})}.call(this),function(){}.call(this),function(){angular.module("skilltree").directive("skill",["$stateParams","$document","$timeout","urlsafeFilter",function(t,e,i,n){return{templateUrl:"components/skill/skill.jade",restrict:"E",scope:{skill:"="},link:function(s,o){return i(function(){return t.scrollTo===n(s.skill.name)?e.scrollToElement(o,50,1e3):void 0}),s.$watch("skill.projects",function(t){return s.count=t.length+" public project",1!==t.length?s.count+="s":void 0},!0)}}}])}.call(this),function(){angular.module("skilltree").controller("NavbarCtrl",["$scope",function(t){return t.date=new Date}])}.call(this),function(){}.call(this),function(){angular.module("skilltree").directive("project",["$window","$document","$stateParams","$timeout","urlsafeFilter",function(t,e,i,n,s){return{templateUrl:"components/project/project.jade",restrict:"E",scope:{project:"=",first:"="},link:function(o,a){return o.edit=i.edit,n(function(){var t;return i.scrollTo===s(o.project.name)?(t=o.first?200:20,e.scrollToElement(a,t,1e3)):void 0}),o.goto=function(e){return t.open(e,"_blank")},o.addHighlight=function(){return console.log("adding highlight"),o.project.highlights.push({})}}}}])}.call(this),function(){angular.module("skilltree").directive("minimapElement",["$document","$window","$timeout","MinimapAPI",function(t,e,i,n){return{restrict:"A",link:function(t,i,s){var o;return o=n.registerElement({name:s.minimapElement,count:s.minimapCount,element:i}),angular.element(e).bind("scroll",function(){var n;return n=e.scrollY+200,n>i[0].offsetTop&&n<i[0].offsetTop+i[0].offsetHeight?(o.update(),t.$apply()):void 0})}}}])}.call(this),function(){angular.module("skilltree").factory("MinimapAPI",["$document","$interval",function(t){var e,i,n,s;return s=[],n=!1,i={index:0},e=function(){function e(t){var e;this.name=t.name,this.count=t.count,this.element=t.element,this.dots=function(){e=[];for(var i=0,n=t.count;n>=0?n>i:i>n;n>=0?i++:i--)e.push(i);return e}.apply(this)}return e.prototype.setFocus=function(){return i.index=s.indexOf(this),n=!0,0===i.index?t.scrollTo(0,0,1e3).then(function(){return n=!1}):t.scrollToElement(this.element,50,1e3).then(function(){return n=!1})},e.prototype.update=function(){return n?void 0:i.index=s.indexOf(this)},e}(),{registerElement:function(t){var i;return i=new e(t),s.push(i),i},minimapElements:s,focus:i}}])}.call(this),function(){}.call(this),function(){angular.module("skilltree").directive("minimap",["$interval","$timeout","$window","MinimapAPI",function(t,e,i,n){return{restrict:"E",templateUrl:"components/minimap/minimap.jade",scope:{},link:function(t,i){return t.elements=n.minimapElements,t.offsets=[],t.setFocus=function(t){return t.setFocus(),ga("send","event","button","navClick",t.name)},e(function(){var e,n,s,o,a;for(s=i[0].children,o=[],e=0,n=s.length;n>e;e++)a=s[e],o.push(t.offsets.push(a.offsetTop));return o}),e(function(){return t.focus=n.focus}),t.setGhost=function(e){return t.ghost=t.offsets[e]},t.resetGhost=function(){return t.ghost=null},t.getGhostOffset=function(){return t.ghost?t.ghost:t.offsets[focus.index]}}}}])}.call(this),function(){}.call(this),function(){angular.module("skilltree").filter("highlight",function(){return function(t){var e,i;return i="",t&&(e=t.split("/").pop(),i=e.split(".").length>1?e:e+"/"),i}})}.call(this),function(){angular.module("skilltree").directive("highlight",["$stateParams",function(t){return{templateUrl:"components/highlight/highlight.jade",scope:{highlight:"="},restrict:"E",link:function(e){return e.edit=t.edit,e.preventIfEdit=function(t){var i;return e.edit&&"button"!==(i=t.target.classList[0])&&"fa"!==i?t.preventDefault():void 0},e.$watch("highlight.link",function(t){var i,n;return t&&(i=t.split("/").pop(),-1!==t.indexOf("github")&&-1===t.indexOf("gist")?i.split(".").length>1?(e.highlight.icon="fa-file-code-o",e.highlight.text=i):(e.highlight.icon="fa-folder-open-o",e.highlight.text=i+"/"):(e.highlight.icon="fa-external-link",e.highlight.text=i),n=e.highlight.text.split("#L"),n.length>1)?(e.highlight.text=n[0],e.highlight.line=n[1]):void 0})}}}])}.call(this),function(){angular.module("skilltree").controller("MainCtrl",["$scope","$window","$document",function(t,e){return t.height=e.innerHeight,t.person={name:"Alonso Holmes",email:"hello@alonso.io",photo:"https://avatars3.githubusercontent.com/u/1147390?v=3&s=460"},t.skills=[{name:"React Native",projects:[{name:"Toshi",description:"A sample project to demonstrate React Native and Redux.",source:"http://github.com/holmesal/toshi",highlights:[{link:"https://github.com/holmesal/toshi/blob/master/src/actions/cryptocurrencies.js#L38",description:"Asynchronous redux actions using redux-thunk middleware."},{link:"https://github.com/holmesal/toshi/blob/master/ios/MTAudio.swift",description:"Example Swift audio-playing component (MTAudio)."},{link:"https://github.com/holmesal/toshi/blob/master/src/components/currencyList.js#L10",description:"An es6 react component @decorated with a reselect selector."},{link:"https://github.com/holmesal/toshi/blob/master/src/selectors/cryptocurrencies.js#L7",description:"A memoized reselect selector, which sites between the redux store and a component."}],extras:["Swift","Objective-C","ES6","iOS Audio"]},{name:"react-native-firebase",description:"A react-native module that wraps the native firebase iOS SDK",source:"https://github.com/holmesal/react-native-firebase",highlights:[{link:"https://github.com/holmesal/react-native-firebase/blob/master/RNFirebase/RNFirebase.swift",description:"Swift implementation - wraps the native iOS Firebase and Facebook SDKs"},{link:"https://github.com/holmesal/react-native-firebase/blob/master/RNFirebase.js",description:"The JS side of RNFirebase - wraps the native JS firebase SDK and proxies certain operations over the bridge."}],extras:["Swift","Objective-C","ES6","Firebase","Facebook"]}]},{name:"React",projects:[{name:"react-completion",description:"Get completion suggestions in-line, as you type.",source:"https://github.com/holmesal/react-completion",highlights:[{link:"http://holmesal.github.io/react-completion",description:"Live demo"},{link:"https://github.com/holmesal/react-completion/blob/master/examples/app.jsx",description:"Example usage"},{link:"https://github.com/holmesal/react-completion/blob/master/react-completion.cjsx",description:"Implementation, in CJSX (coffeescript + jsx)"}],extras:["React","Webpack","Coffeescript","CJSX"]},{name:"podcastfoo",description:"social podcast listening",source:"https://github.com/holmesal/podcastfoo",highlights:[{link:"http://podcastfoo.firebaseapp.com",description:"Listen in your browser & download the desktop app."},{link:"https://github.com/holmesal/podcastfoo/blob/master/src/stores/player-store.coffee",description:"Biff store for the audio player."},{link:"https://github.com/holmesal/podcastfoo/blob/master/src/components/player/player.cjsx#L33",description:"Store mixed in to component."}],extras:["React","Coffeescript","CJSX","Flux","Biff"]}]},{name:"AngularJS",projects:[{name:"Skilltree",description:"A list of skills and corresponding github projects. The website you're looking at.",source:"http://github.com/holmesal/skilltree",highlights:[{link:"https://github.com/holmesal/skilltree/tree/master/src/components/minimap",description:"A side-mounted nav (inspired by Sublime Text's \"minimap\") that allows you to quickly jump around a page. Over there (if you're on desktop) ------>"}],extras:["Gulp","SASS","Firebase"]},{name:"Hashtag",description:"Realtime, IRC-like chat app.",source:"http://github.com/holmesal/hashtag",highlights:[{link:"https://github.com/holmesal/hashtag/blob/develop/Gruntfile.js#L695",description:"1-command desktop app releases with node-webkit and amazon s3."},{link:"https://github.com/holmesal/hashtag/blob/develop/desktop/launcher.coffee",description:"Node-Webkit desktop app auto-updater and launcher. Watches for new releases, and downloads and unpacks them."},{link:"https://github.com/holmesal/hashtag/blob/develop/app/scripts/app.coffee",description:"Routes wait to resolve until firebase authentication fires (or errors), and the required data is fetched and injected into the controller."},{link:"https://github.com/holmesal/hashtag/blob/develop/app/scripts/directives/autocomplete.coffee",description:'@mention directive slides up an interface when the user types "@", allowing you to key through people in the room.'},{link:"https://github.com/holmesal/hashtag/blob/develop/app/scripts/services/user.coffee",description:"Custom composebar directive with support for file uploads."}],extras:["node-webkit","grunt","coffeescript","sass","firebase"]},{name:"Switchboard",description:"Sample-management and publishing software for the Teenage Engineering OP-1",source:"https://github.com/holmesal/switchboard",highlights:[{link:"https://github.com/holmesal/switchboard/blob/master/gulp/atom.js",description:"Gulp workflow for relaunching an instance of Atom-Shell if files related to the shell change. The angular app running inside Atom-Shell still livereloads using the normal browsersync gulp workflow."},{link:"https://github.com/holmesal/switchboard/tree/master/src/components/freespace",description:"Directive to visually represent the number of synths and samples loaded, and the available slots remaining. The basis for fa-meter."}],extras:["Atom-Shell","Gulp","SASS","Coffeescript"]},{name:"Firesolver",description:"Directive to make route changes contingent on firebase.",source:"https://github.com/holmesal/firesolver",highlights:[{link:"https://github.com/holmesal/firesolver/blob/master/firesolver.coffee",description:"$q promises are used to wait for authentication and/or data from a specific firebase location, and then either abort the route change or complete it. If completed, the authenticated user and/or data is injected into the controller."}],extras:["CoffeeScript"]}]},{name:"Famo.us",projects:[{name:"fa-meter",description:"Angular directive for famo.us-powered annotated meters.",source:"https://github.com/holmesal/fa-meter",highlights:[{link:"https://github.com/holmesal/fa-meter/blob/master/src/fa-meter.jade#L61",description:"Lots of transitionables for fine-grained control of every aspect of the animation and presentation."},{link:"https://github.com/holmesal/fa-meter/blob/master/src/fa-meter.coffee#L58",description:"Famo.us/angular $timeline service for controlling multiple animations with a single transitionable."}],extras:["AngularJS","Gulp","Jade","SASS","CoffeeScript"]},{name:"Personal Portfolio",description:"A famo.us-powered portfolio of personal projects, at alonso.io",source:"https://github.com/holmesal/such-fame",highlights:[{link:"https://github.com/holmesal/such-fame/blob/master/Gruntfile.js#L345",description:"Using $templateCache to cut down on the number of HTTP requests made when the page loads, which can interfere with the render loop."},{link:"https://github.com/holmesal/such-fame/blob/master/app/scripts/controllers/main.coffee#L251",description:'Project "bubbles" are attached to the center and corner anchor points by springs of varying stiffnesses and unstretched lengths.'},{link:"https://github.com/holmesal/such-fame/blob/master/app/scripts/controllers/main.coffee#L744",description:"Here, native ngAnimate behavior kicks off a famo.us transitionable .set() call."},{link:"https://github.com/holmesal/such-fame/blob/master/app/views/main.html",description:"The main template, and a candidate for directive-ization."}],extras:["AngularJS","SASS","Grunt"]},{name:"awesome-seed",description:"a seed project for angular + famo.us apps",source:"https://github.com/holmesal/awesome-seed",highlights:[{link:"https://github.com/holmesal/awesome-seed/blob/master/src/app/main/main.controller.coffee#L41",description:"UI-Router calls $enter and $leave controller methods, which use famo.us transitionables to animate state changes."}],extras:["AngularJS","Sheets","SASS","CoffeeScript","Gulp","Jade"]}]},{name:"NodeJS",projects:[{name:"Fireman",description:"Push notification server for Firebase-powered apps.",source:"https://github.com/holmesal/fireman",highlights:[{link:"https://github.com/holmesal/fireman/blob/master/server.coffee",description:"Fireman listens to a `pushQueue` at the root of the firebase. Any time an notification object is pushed into the queue, a push notification is sent to the appropriate device."}],extras:["Dokku","CoffeScript"]},{name:"rbn-pi",description:"A daemon designed to run on a raspberry pi and stream data from connected USB and Bluetooth devices.",source:"https://github.com/holmesal/bifrost",highlights:[{link:"https://github.com/holmesal/bifrost/blob/master/config.json",description:"You can require modules like rbn-ble to listen to bluetooth devices, or rbn-websocket to use websockets as a transport layer."},{link:"https://github.com/holmesal/bifrost/blob/master/rbn-pi.coffee",description:"Entry point. Keeps an eye on the github releases page, and downloads any new updates autonomously. Auto-updating is especially important when you're doing things like encasing Raspberry Pis in concrete walls."}],extras:["Raspberry Pi"]},{name:"Marvin the Robot",description:"A depressed, trash-picking-up robot powered by genetic algorithms.",source:"https://github.com/holmesal/marvintherobot",highlights:[{link:"https://github.com/holmesal/marvintherobot/blob/master/src/marvin.litcoffee",description:"The annotated source. Describes the genome, and the fitness function used to evolve it."}],extras:["Literate CoffeeScript","Genetic Algorithms"]},{name:"Stream backend",description:"Backend for a simple microblogging platform.",source:"https://github.com/holmesal/stream-backend",highlights:[{link:"https://github.com/holmesal/stream-backend/blob/master/models.coffee",description:"Simple mongoose models"},{link:"https://github.com/holmesal/stream-backend/blob/master/server.coffee",description:"Routes and middleware."}],extras:["Express","MongoDB","Mongoose","CoffeeScript"]}]},{name:"BackboneJS",projects:[{name:"Reactr",description:"A frontend for the internet of things.",source:"https://github.com/holmesal/reactr/tree/master/builder/app/scripts",highlights:[{link:"https://github.com/holmesal/reactr/blob/master/builder/app/scripts/app.coffee",description:"Entry point for the controller builder interface."},{link:"https://github.com/holmesal/reactr/blob/master/builder/app/scripts/views/controller.coffee",description:"Backbone controller view, for managing groups of controls."}]},{name:"Radius",description:"Pandora for local artists.",source:"https://github.com/holmesal/radiusv2",highlights:[{link:"https://github.com/holmesal/radiusv2/blob/master/frontend/js/views/player.js",description:"Backbone view responsible for managing the onscreen player, which streams audio from soundcloud."}]}]},{name:"Python",projects:[{name:"Wanderlust",description:"Rasterizes data from Open Street Maps to a game map.",source:"https://github.com/holmesal/wanderlust",highlights:[{link:"https://github.com/holmesal/wanderlust/blob/master/osm.py",description:"Queries Open Street Maps for specific types of entites (roads, buildings, etc), and rasterizes the response into a 1m-resolution grid."},{link:"https://github.com/holmesal/wanderlust/blob/master/getdata.py#L23",description:'Geohashes are used to project vector data (in latitude/longiture or UTM) onto discrete "blocks" for use in-game.'}],extras:["Google App Engine","Open Street Maps"]}]},{name:"Swift",projects:[{name:"react-native-firebase",description:"A react-native module that wraps the native firebase iOS SDK",source:"https://github.com/holmesal/react-native-firebase",highlights:[{link:"https://github.com/holmesal/react-native-firebase/blob/master/RNFirebase/RNFirebase.swift",description:"Swift implementation - wraps the native iOS Firebase and Facebook SDKs"}],extras:["Swift","Objective-C","ES6","Firebase","Facebook"]},{name:"MTAudio",description:"Buffers and streams audio by wrapping StreamingKit",source:"https://github.com/holmesal/toshi/blob/master/ios/MTAudio.swift",highlights:[{link:"https://github.com/holmesal/toshi/blob/master/ios/MTAudio.swift",description:"MTAudio Swift implementation"}],extras:["StreamingKit","iOS Audio"]}]},{name:"Objective-C",projects:[{name:"Shortwave",description:"A mobile chat room with a range of 100 feet.",source:"https://gist.github.com/holmesal/104d1248482ee9caec44",highlights:[{link:"https://medium.com/@alonsoholmes/wtfbeacon-how-shortwave-works-e926813091af",description:"Blog post on how wtfBeacon works."},{link:"https://gist.github.com/holmesal/104d1248482ee9caec44",description:"ESTransponder main class."}],extras:["Firebase","Swift","iBeacons"]}]}],e.document.title=t.person.name+" on Skilltree"}])}.call(this),function(t,e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define([],function(){return t.returnExportsGlobal=e()});else{var i=e();t.snabbtjs=i,t.snabbt=i.snabbt}}(this,function(){var t=t||{};t.Animation=function(e){this._start_state=e.start_state,this._end_state=e.end_state,this.offset=e.offset,this.duration=e.duration||500,this.delay=e.delay||0,this.easing=t.create_easer("linear"),this.perspective=e.perspective,e.easing&&(this.easing=t.create_easer(e.easing,e)),this._current_state=this._start_state.clone(),e.offset&&(this._current_state.offset_x=this.offset[0],this._current_state.offset_y=this.offset[1],this._current_state.offset_z=this.offset[2],this._end_state.offset_x=this.offset[0],this._end_state.offset_y=this.offset[1],this._end_state.offset_z=this.offset[2]),this.start_time=0,this.current_time=0,this._stopped=!1},t.Animation.prototype.stop=function(){this._stopped=!0},t.Animation.prototype.stopped=function(){return this._stopped},t.Animation.prototype.tick=function(t){if(!this._stopped){this.start_time||(this.start_time=t),t-this.start_time>this.delay&&(this.current_time=t-this.delay);var e=Math.min(Math.max(0,this.current_time-this.start_time),this.duration),i=this.duration;this.easing.tick(e/i),this.update_current_transform()}},t.Animation.prototype.current_state=function(){return this._current_state},t.Animation.prototype.update_current_transform=function(){var e=this.easing.value();t.TweenStates(this._start_state,this._end_state,this._current_state,e)},t.Animation.prototype.completed=function(){return this._stopped?!0:0===this.start_time?!1:this.easing.completed()},t.Animation.prototype.update_element=function(e){var i=this._current_state.as_matrix(),n=this._current_state.properties();t.update_element_transform(e,i,this.perspective),t.update_element_properties(e,n)},t.ValueFeededAnimation=function(e){this.value_feeder=e.value_feeder,this.duration=e.duration||500,this.delay=e.delay||0,this.perspective=e.perspective,this.easing=t.create_easer("linear"),e.easing&&(this.easing=t.create_easer(e.easing,e)),this._current_state=new t.State({}),this.current_matrix=this.value_feeder(0),this.start_time=0,this.current_time=0,this._stopped=!1},t.ValueFeededAnimation.prototype.stop=function(){this._stopped=!0},t.ValueFeededAnimation.prototype.stopped=function(){return this._stopped},t.ValueFeededAnimation.prototype.tick=function(t){if(!this._stopped){this.start_time||(this.start_time=t),t-this.start_time>this.delay&&(this.current_time=t-this.delay);var e=Math.min(Math.max(.001,this.current_time-this.start_time),this.duration),i=this.duration;this.easing.tick(e/i),this.update_current_transform()}},t.ValueFeededAnimation.prototype.current_state=function(){return this._current_state},t.ValueFeededAnimation.prototype.update_current_transform=function(){var t=this.easing.value();this.current_matrix=this.value_feeder(t)},t.ValueFeededAnimation.prototype.completed=function(){return this._stopped?!0:this.easing.completed()},t.ValueFeededAnimation.prototype.update_element=function(e){t.update_element_transform(e,this.current_matrix,this.perspective)},t.ScrollAnimation=function(e){this.start_scroll=window.scrollY,this.end_scroll=e.scroll_pos,this.duration=e.duration||500,this.delay=e.delay||0,this.easing=e.easing||t.cos_easing,this.start_time=0,this.current_time=0},t.ScrollAnimation.prototype.tick=function(t){this.start_time||(this.start_time=t),t-this.start_time>this.delay&&(this.current_time=t-this.delay),this.update_scrolling()},t.ScrollAnimation.prototype.update_scrolling=function(){var t=Math.min(Math.max(.001,this.current_time-this.start_time),this.duration),e=this.duration,i=this.easing(t,e),n=this.end_scroll-this.start_scroll,s=this.start_scroll+i*n;window.scrollTo(0,s)},t.ScrollAnimation.prototype.completed=function(){return 0===this.start_time?!1:this.current_time-this.start_time>this.duration},t.AttentionAnimation=function(e){this.movement=e.movement,this.current_movement=new t.State({}),e.initial_velocity=.1,e.equilibrium_position=0,this.spring=new t.SpringEasing(e),this._stopped=!1},t.AttentionAnimation.prototype.stop=function(){this._stopped=!0},t.AttentionAnimation.prototype.stopped=function(){return this._stopped},t.AttentionAnimation.prototype.tick=function(){this._stopped||this.spring.equilibrium||(this.spring.tick(),this.update_movement())},t.AttentionAnimation.prototype.update_movement=function(){this.current_movement.x=this.movement.x*this.spring.position,this.current_movement.y=this.movement.y*this.spring.position,this.current_movement.z=this.movement.z*this.spring.position,this.current_movement.ax=this.movement.ax*this.spring.position,this.current_movement.ay=this.movement.ay*this.spring.position,this.current_movement.az=this.movement.az*this.spring.position,this.current_movement.bx=this.movement.bx*this.spring.position,this.current_movement.by=this.movement.by*this.spring.position,this.current_movement.bz=this.movement.bz*this.spring.position},t.AttentionAnimation.prototype.update_element=function(e){var i=this.current_movement.as_matrix(),n=this.current_movement.properties();t.update_element_transform(e,i),t.update_element_properties(e,n)},t.AttentionAnimation.prototype.current_state=function(){return this.current_movement},t.AttentionAnimation.prototype.completed=function(){return this.spring.equilibrium||this._stopped},t.create_animation=function(e){return e.value_feeder?new t.ValueFeededAnimation(e):new t.Animation(e)};var t=t||{};t.linear_easing=function(t){return t},t.ease=function(t){return(Math.cos(t*Math.PI+Math.PI)+1)/2},t.ease_in=function(t){return t*t},t.ease_out=function(t){return-Math.pow(t-1,2)+1},t.SpringEasing=function(e){this.position=t.option_or_default(e.start_position,0),this.equilibrium_position=t.option_or_default(e.equilibrium_position,1),this.velocity=t.option_or_default(e.initial_velocity,0),this.spring_constant=t.option_or_default(e.spring_constant,.8),this.deacceleration=t.option_or_default(e.spring_deacceleration,.9),this.mass=t.option_or_default(e.spring_mass,10),this.equilibrium=!1},t.SpringEasing.prototype.tick=function(t){if(0!==t&&!this.equilibrium){var e=-(this.position-this.equilibrium_position)*this.spring_constant,i=e/this.mass;this.velocity+=i,this.position+=this.velocity,this.velocity*=this.deacceleration,Math.abs(this.position-this.equilibrium_position)<.001&&Math.abs(this.velocity)<.001&&(this.equilibrium=!0)}},t.SpringEasing.prototype.value=function(){return this.position},t.SpringEasing.prototype.completed=function(){return this.equilibrium},t.EASING_FUNCS={linear:t.linear_easing,ease:t.ease,"ease-in":t.ease_in,"ease-out":t.ease_out},t.Easer=function(t){this.easer=t,this._value=0},t.Easer.prototype.tick=function(t){this._value=this.easer(t),this.last_value=t},t.Easer.prototype.value=function(){return this._value},t.Easer.prototype.completed=function(){return this.last_value>=1},t.create_easer=function(e,i){if("spring"==e)return new t.SpringEasing(i);var n;return n=t.is_function(e)?e:t.EASING_FUNCS[e],new t.Easer(n)},window.jQuery&&!function(t){t.fn.snabbt=function(t,e){return snabbt(this.get(),t,e)}}(jQuery);var t=t||{};t.snabbt=function(e,i,n){function s(e){return c.tick(e),c.update_element(o),c.stopped()?void 0:c.completed()?void(a.loop>1&&!c.stopped()?(a.loop-=1,c=t.create_animation(h),t.requestAnimationFrame(s)):(a.callback&&a.callback(),u.length&&(a=u.pop(),r=t.state_from_options(l,a,"from_"),l=t.state_from_options(new t.State({}),a,""),t.setup_animation_options(r,l,a),c=new t.Animation(a),t.running_animations.push([o,c]),c.tick(e),t.requestAnimationFrame(s)))):t.requestAnimationFrame(s)}if("scroll"===e)return t.setup_scroll_animation(i);if("attention"===i)return t.setup_attention_animation(e,n);if("stop"===i)return t.stop_animation(e);var o=e,a=i,r=t.current_animation_transform(o);r||(r=t.state_from_options(r,a,"from_"));var l=new t.State({});l=t.state_from_options(l,a,"");var h=t.setup_animation_options(r,l,a),c=t.create_animation(h);if(o.hasOwnProperty("length"))for(var p=0;p<o.length;++p)t.running_animations.push([o[p],c]);else t.running_animations.push([o,c]);c.update_element(o);var u=[],m={then:function(t){return u.unshift(t),m}};return t.requestAnimationFrame(s),m},t.setup_scroll_animation=function(e){function i(e){n.tick(e),n.completed()||t.requestAnimationFrame(i)}var n=new t.ScrollAnimation(e);t.running_animations.push([void 0,n]),t.requestAnimationFrame(i)},t.setup_attention_animation=function(e,i){function n(i){o.tick(i),o.update_element(e),o.completed()||t.requestAnimationFrame(n)}var s=t.state_from_options(new t.State({}),i,"");i.movement=s;var o=new t.AttentionAnimation(i);t.running_animations.push([e,o]),t.requestAnimationFrame(n)},t.stop_animation=function(e){for(var i=0;i<t.running_animations.length;++i){var n=t.running_animations[i][0],s=t.running_animations[i][1];if(e.hasOwnProperty("length"))for(var o=0;o<e.length;++o)n===e[o]&&s.stop();else n===e&&s.stop()}},t.current_animation_transform=function(e){for(var i=0;i<t.running_animations.length;++i){var n=t.running_animations[i][0],s=t.running_animations[i][1];if(!s.stopped()){var o;if(e.hasOwnProperty("length")){for(var a=0;a<e.length;++a)if(n===e[a])return o=s.current_state(),s.stop(),o}else if(n===e)return o=s.current_state(),s.stop(),o}}},t.state_from_options=function(e,i,n){return e||(e=new t.State({})),i[n+"position"]&&(e.x=i[n+"position"][0],e.y=i[n+"position"][1],e.z=i[n+"position"][2]),i[n+"rotation"]&&(e.ax=i[n+"rotation"][0],e.ay=i[n+"rotation"][1],e.az=i[n+"rotation"][2]),i[n+"skew"]&&(e.skew_x=i[n+"skew"][0],e.skew_y=i[n+"skew"][1]),i[n+"rotation_post"]&&(e.bx=i[n+"rotation_post"][0],e.by=i[n+"rotation_post"][1],e.bz=i[n+"rotation_post"][2]),i[n+"scale"]&&(e.sx=i[n+"scale"][0],e.sy=i[n+"scale"][1]),void 0!==i[n+"width"]&&(e.width=i[n+"width"]),void 0!==i[n+"height"]&&(e.height=i[n+"height"]),void 0!==i[n+"opacity"]&&(e.opacity=i[n+"opacity"]),e},t.setup_animation_options=function(t,e,i){return i.start_state=t,i.end_state=e,i},t.tick_requests=[],t.running_animations=[],t.requestAnimationFrame=function(e){t.tick_requests.push(e)},t.tick_animations=function(e){for(var i=t.tick_requests.length,n=0;i>n;++n)t.tick_requests[n](e);t.tick_requests.splice(0,i),window.requestAnimationFrame(t.tick_animations),t.running_animations=t.running_animations.filter(function(t){return!t[1].completed()})},window.requestAnimationFrame(t.tick_animations);var t=t||{};t.assigned_matrix_multiplication=function(t,e,i){return i[0]=t[0]*e[0]+t[1]*e[4]+t[2]*e[8]+t[3]*e[12],i[1]=t[0]*e[1]+t[1]*e[5]+t[2]*e[9]+t[3]*e[13],i[2]=t[0]*e[2]+t[1]*e[6]+t[2]*e[10]+t[3]*e[14],i[3]=t[0]*e[3]+t[1]*e[7]+t[2]*e[11]+t[3]*e[15],i[4]=t[4]*e[0]+t[5]*e[4]+t[6]*e[8]+t[7]*e[12],i[5]=t[4]*e[1]+t[5]*e[5]+t[6]*e[9]+t[7]*e[13],i[6]=t[4]*e[2]+t[5]*e[6]+t[6]*e[10]+t[7]*e[14],i[7]=t[4]*e[3]+t[5]*e[7]+t[6]*e[11]+t[7]*e[15],i[8]=t[8]*e[0]+t[9]*e[4]+t[10]*e[8]+t[11]*e[12],i[9]=t[8]*e[1]+t[9]*e[5]+t[10]*e[9]+t[11]*e[13],i[10]=t[8]*e[2]+t[9]*e[6]+t[10]*e[10]+t[11]*e[14],i[11]=t[8]*e[3]+t[9]*e[7]+t[10]*e[11]+t[11]*e[15],i[12]=t[12]*e[0]+t[13]*e[4]+t[14]*e[8]+t[15]*e[12],i[13]=t[12]*e[1]+t[13]*e[5]+t[14]*e[9]+t[15]*e[13],i[14]=t[12]*e[2]+t[13]*e[6]+t[14]*e[10]+t[15]*e[14],i[15]=t[12]*e[3]+t[13]*e[7]+t[14]*e[11]+t[15]*e[15],i},t.mat_to_css=function(t){for(var e=["matrix3d("],i=0;i<t.length-1;++i)e.push(Math.abs(t[i])<.01?"0,":t[i].toFixed(10)+"0,");return e.push(t[15].toFixed(10)+")"),e.join("")},t.mat_to_css2=function(t){var e="matrix3d("+t[0].toFixed(10)+", "+t[1].toFixed(10)+", "+t[2].toFixed(10)+", "+t[3].toFixed(10)+", "+t[4].toFixed(10)+", "+t[5].toFixed(10)+", "+t[6].toFixed(10)+", "+t[7].toFixed(10)+", "+t[8].toFixed(10)+", "+t[9].toFixed(10)+", "+t[10].toFixed(10)+", "+t[11].toFixed(10)+", "+t[12].toFixed(10)+", "+t[13].toFixed(10)+", "+t[14].toFixed(10)+", "+t[15].toFixed(10)+")";return e},t.mult=function(e,i){var n=new Float32Array(16);return t.assigned_matrix_multiplication(e,i,n),n},t.trans=function(t,e,i){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t,e,i,1])},t.rotX=function(t){return new Float32Array([1,0,0,0,0,Math.cos(t),-Math.sin(t),0,0,Math.sin(t),Math.cos(t),0,0,0,0,1])},t.rotY=function(t){return new Float32Array([Math.cos(t),0,Math.sin(t),0,0,1,0,0,-Math.sin(t),0,Math.cos(t),0,0,0,0,1])},t.rotZ=function(t){return new Float32Array([Math.cos(t),-Math.sin(t),0,0,Math.sin(t),Math.cos(t),0,0,0,0,1,0,0,0,0,1])},t.skew=function(t,e){return new Float32Array([1,Math.tan(t),0,0,Math.tan(e),1,0,0,0,0,1,0,0,0,0,1])},t.scale=function(t,e){return new Float32Array([t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1])},t.ident=function(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])},t.set_css=function(e,i){if(e.hasOwnProperty("length"))for(var n=0;n<e.length;++n)e[n].style.webkitTransform=t.mat_to_css(i),e[n].style.transform=t.mat_to_css(i);else e.style.webkitTransform=t.mat_to_css(i),e.style.transform=t.mat_to_css(i)},t.State=function(e){this.ax=t.option_or_default(e.ax,0),this.ay=t.option_or_default(e.ay,0),this.az=t.option_or_default(e.az,0),this.x=t.option_or_default(e.x,0),this.y=t.option_or_default(e.y,0),this.z=t.option_or_default(e.z,0),this.bx=t.option_or_default(e.bx,0),this.by=t.option_or_default(e.by,0),this.bz=t.option_or_default(e.bz,0),this.skew_x=t.option_or_default(e.skew_x,0),this.skew_y=t.option_or_default(e.skew_y,0),this.offset_x=t.option_or_default(e.offset_x,0),this.offset_y=t.option_or_default(e.offset_y,0),this.offset_z=t.option_or_default(e.offset_z,0),this.sx=t.option_or_default(e.sx,1),this.sy=t.option_or_default(e.sy,1),this.width=e.width,this.height=e.height,this.opacity=t.option_or_default(e.opacity,1)},t.State.prototype.clone=function(){var e=new t.State({ax:this.ax,ay:this.ay,az:this.az,x:this.x,y:this.y,z:this.z,bx:this.bx,by:this.by,bz:this.bz,skew_x:this.skew_x,skew_y:this.skew_y,sx:this.sx,sy:this.sy,height:this.height,width:this.width,opacity:this.opacity});return e},t.State.prototype.assign=function(t){this.ax=t.ax,this.ay=t.ay,this.az=t.az,this.x=t.x,this.y=t.y,this.z=t.z,this.bx=t.bx,this.by=t.by,this.bz=t.bz,this.skew_x=t.skew_x,this.skew_y=t.skew_y,this.sx=t.sx,this.sy=t.sy,this.opacity=t.opacity,this.height=this.height,this.width=this.width},t.State.prototype.as_matrix=function(){var e=t.scale(this.sx,this.sy);return e=t.mult(e,t.skew(this.skew_x,this.skew_y)),e=t.mult(e,t.rotX(this.ax)),e=t.mult(e,t.rotY(this.ay)),e=t.mult(e,t.rotZ(this.az)),e=t.mult(e,t.trans(this.x,this.y,this.z)),e=t.mult(e,t.rotX(this.bx)),e=t.mult(e,t.rotY(this.by)),e=t.mult(e,t.rotZ(this.bz)),e=t.mult(t.trans(this.offset_x,this.offset_y,this.offset_z),e)},t.State.prototype.properties=function(){return{opacity:this.opacity,width:this.width+"px",height:this.height+"px"}
};var t=t||{};t.TweenStates=function(t,e,i,n){var s=e.x-t.x,o=e.y-t.y,a=e.z-t.z,r=e.ax-t.ax,l=e.ay-t.ay,h=e.az-t.az,c=e.bx-t.bx,p=e.by-t.by,u=e.bz-t.bz,m=e.sx-t.sx,d=e.sy-t.sy,f=e.skew_x-t.skew_x,g=e.skew_y-t.skew_y,b=e.width-t.width,_=e.height-t.height,v=e.opacity-t.opacity;i.ax=t.ax+n*r,i.ay=t.ay+n*l,i.az=t.az+n*h,i.x=t.x+n*s,i.y=t.y+n*o,i.z=t.z+n*a,i.bx=t.bx+n*c,i.by=t.by+n*p,i.bz=t.bz+n*u,i.skew_x=t.skew_x+n*f,i.skew_y=t.skew_y+n*g,i.sx=t.sx+n*m,i.sy=t.sy+n*d,void 0!==e.width&&(i.width=t.width+n*b),void 0!==e.height&&(i.height=t.height+n*_),void 0!==e.opacity&&(i.opacity=t.opacity+n*v)};var t=t||{};return t.option_or_default=function(t,e){return"undefined"==typeof t?e:t},t._update_element_transform=function(e,i,n){var s="";n&&(s="perspective("+n+"px) "),e.style.webkitTransform=s+t.mat_to_css(i),e.style.transform=s+t.mat_to_css(i)},t.update_element_transform=function(e,i,n){if(e.hasOwnProperty("length"))for(var s=0;s<e.length;++s)t._update_element_transform(e[s],i,n);else t._update_element_transform(e,i,n)},t._update_element_properties=function(t,e){for(var i in e)t.style[i]=e[i]},t.update_element_properties=function(e,i){if(e.hasOwnProperty("length"))for(var n=0;n<e.length;++n)t._update_element_properties(e[n],i);else t._update_element_properties(e,i)},t.is_function=function(t){return"function"==typeof t},t}),angular.module("skilltree").run(["$templateCache",function(t){t.put("components/highlight/highlight.jade",'\n<div class="row highlight"><a ng-href="{{highlight.link}}" ng-click="preventIfEdit($event)" target="_blank">\n    <div class="hidden-xs col-sm-1">\n      <div ng-href="{{highlight.link}}" target="_blank" class="button"><i ng-class="highlight.icon" class="fa"></i></div>\n    </div>\n    <div class="col-xs-12 col-sm-11">\n      <div class="info">\n        <p class="file"><span class="visible-xs-inline"><i ng-class="highlight.icon" class="fa"></i></span><span ng-if="!edit">{{highlight.text}}</span><span ng-if="edit" ng-model="highlight.link" ng-class="{edit:edit}" medium-editor="medium-editor" data-disable-toolbar="data-disable-toolbar" options="{disableEditing: {{!edit}}, placeholder: \'Paste a link to a file or folder on github\', disableReturn: true}" class="editable"></span><span ng-if="highlight.line" class="lineNumber">Line {{highlight.line}}</span></p>\n        <p ng-model="highlight.description" ng-class="{edit:edit}" medium-editor="medium-editor" data-disable-toolbar="data-disable-toolbar" options="{disableEditing: {{!edit}}, placeholder: \'Why is this code interesting?\', disableReturn: true}" class="description editable"></p>\n      </div>\n    </div></a></div>'),t.put("components/minimap/minimap.jade",'\n<div ng-repeat="element in elements" ng-click="setFocus(element)" ng-class="{focus: $index == focus.index}" ng-mouseenter="setGhost($index)" ng-mouseleave="resetGhost()" class="section">\n  <div class="name">{{element.name}}</div>\n  <div ng-repeat="dot in element.dots" ng-style="{\'transitionDelay\': $parent.$index == focus.index ? $index*25 + 175 + \'ms\' : \'0ms\'}" class="dot"></div>\n</div>\n<div ng-style="{transform: \'translateY(\'+offsets[focus.index]+\'px)\'}" class="arrow"></div>\n<div ng-class="{visible: ghost != null}" ng-style="{transform: \'translateY(\'+getGhostOffset()+\'px)\'}" class="arrow ghost"></div>'),t.put("components/project/project.jade",'\n<div class="top row">\n  <div class="col-xs-12 col-sm-8">\n    <div class="info">\n      <p ng-model="project.name" ng-class="{edit:edit}" medium-editor="medium-editor" data-disable-toolbar="data-disable-toolbar" options="{disableEditing: {{!edit}}, placeholder: \'Give your project a title\', disableReturn: true}" class="name editable"></p>\n      <p ng-model="project.description" ng-class="{edit:edit}" medium-editor="medium-editor" data-disable-toolbar="data-disable-toolbar" options="{disableEditing: {{!edit}}, placeholder: \'Give your project a description\', disableReturn: true}" class="description editable"></p>\n    </div>\n  </div>\n  <div class="col-xs-12 col-sm-4"><a href="{{project.source}}" target="_blank" class="button hidden-xs"> <i class="fa fa-github-alt withText"></i><span>source</span></a><a href="{{project.source}}" target="_blank" class="button visible-xs"><i class="fa fa-github-alt withText"></i><span>view source</span></a></div>\n</div>\n<div ng-if="project.highlights" class="dash"></div>\n<div ng-if="project.highlights" class="bottom">\n  <highlight ng-repeat="highlight in project.highlights" highlight="highlight"></highlight>\n  <div ng-if="edit" ng-click="addHighlight()" class="row highlight prompt">\n    <div class="hidden-xs col-sm-1">\n      <div class="button"><i class="fa fa-plus"></i></div>\n    </div>\n    <div class="col-xs-12 col-sm-11">\n      <div class="info">\n        <p class="file"><span class="visible-xs-inline"><i class="fa fa-plus"></i></span><span>add a link to a file or folder on github</span></p>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-xs-12">\n      <div class="extras">\n        <div ng-repeat="extra in project.extras" class="extra">{{extra}}</div>\n      </div>\n    </div>\n  </div>\n</div>'),t.put("components/skill/skill.jade",'\n<p class="name">{{skill.name}}</p>\n<p class="count">{{count | uppercase}}</p>\n<div ng-repeat="project in skill.projects">\n  <div class="separator">\n    <div class="line"></div>\n  </div>\n  <project project="project" first="$index == 0" id="{{project.name | urlsafe}}"></project>\n</div>')}]),angular.module("skilltree").run(["$templateCache",function(t){t.put("app/main/main.jade",'\n<div ng-include="\'components/navbar/navbar.html\'" ng-if="false"></div>\n<div class="container">\n  <div ng-style="{height: height/2}" class="personWrapper">\n    <div class="person">\n      <p class="name">{{person.name}}</p><a ng-href="mailto:{{person.email}}" class="email"><i class="fa fa-paper-plane-o"></i><span>{{person.email}}</span></a>\n    </div>\n  </div>\n  <skill ng-repeat="skill in skills" skill="skill" id="{{skill.name | urlsafe}}" minimap-element="{{skill.name}}" minimap-count="{{skill.projects.length}}"></skill>\n  <div class="madeWith"><a href="mailto:hire@alonso.io" id="madeWith">hire@alonso.io</a></div>\n</div>\n<minimap class="hidden-xs hidden-sm"></minimap>')}]),angular.module("skilltree").run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);