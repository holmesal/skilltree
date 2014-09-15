(function(){"use strict";angular.module("skilltreeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location",function(){}])}).call(this),function(){"use strict";angular.module("skilltreeApp").controller("MainCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("skilltreeApp").controller("AboutCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("skilltreeApp").controller("ProfileCtrl",["$scope",function(a){return a.person={photo:"https://avatars3.githubusercontent.com/u/1147390?v=2&s=460",name:"Alonso Holmes"},a.skills=[{name:"AngularJS",projects:[{title:"wavelength",description:"Group communication. Fixed.",links:{site:"wavelength.im"}},{title:"skilltree",description:"Skill sheets for developers",links:{code:"https://github.com/holmesal/skilltree",site:"skilltree.mtnlab.io"}},{title:"such fame",description:"a famo.us/angular portfolio",links:{code:"https://github.com/holmesal/such-fame",site:"famous.mtnlab.io"}}]},{name:"NodeJS",projects:[{title:"shortbot",description:"Wavelength's message parser",links:{}},{title:"salute",description:"Backend for an iBeacon-powered linkedin connector",links:{site:"salute.io"}},{title:"bifrost",description:"Turn your Raspberry Pi into a Bluetooth Low Energy relay",links:{code:"https://github.com/robinpowered/bifrost",site:"https://robinpowered.com/developers"}}]},{name:"Objective-C",projects:[{title:"shortwave",description:"A messaging app with a range of 70 feet",links:{site:"itunes.apple.com/us/app/shortwave-messaging/id864480884?mt=8"}}]}]}])}.call(this),function(){"use strict";angular.module("skilltreeApp").directive("line",function(){return{replace:!0,template:'<svg id="lineSvg"></svg>',restrict:"E",link:function(a,b){var c,d;return d=20,new(c=function(){function a(){this.dims={w:b.width(),h:b.height()},this.s=Snap("#lineSvg"),this.drawFaded()}return a.prototype.drawFaded=function(){return this.faded=this.s.line(this.dims.w/2,0,this.dims.w/2,0),this.faded.attr({stroke:"#4A4A4A",opacity:.17,strokeWidth:.5}),this.faded.animate({y2:this.dims.h},1e3*this.dims.h/d)},a}())}}})}.call(this),function(){"use strict";angular.module("skilltreeApp").directive("projects",["$timeout","$rootScope","Auth",function(a,b,c){return{templateUrl:"views/partials/projects.html",restrict:"E",scope:{projects:"=",idx:"=",shown:"=",padding:"=",velocity:"="},link:function(b,d){var e;return b.projectVisible=[],b.showAdd=!1,b.init=function(){return b.line=new e},b.$watch("shown",function(a){return console.log("shown changed to "+b.shown),a===!0?b.line.draw():void 0},!0),b.$watch("showAdd",function(){return function(a){return void 0!==a&&b.line&&(b.line.rotatePlus(),a)?b.$broadcast("focusOn","repoName"):void 0}}(this)),a(b.init,100),e=function(){function e(){this.positions=[],this.dots=[],this.$elem=angular.element(d.children()[0]),console.log(this.$elem),this.dims={w:this.$elem.width(),h:this.$elem.height()},this.s=Snap("#svg-"+b.idx),this.getPositions()}return e.prototype.getPositions=function(){var a,c,e;return this.parentOffset=d[0].offsetTop,console.log("parent offset is "+this.parentOffset),this.positions=function(){var b,e,f,g;for(f=d[0].children,g=[],c=b=0,e=f.length;e>b;c=++b)a=f[c],0!==c&&g.push(a.offsetTop);return g}(),b.projectVisible=function(){var a,b,c,d;for(c=this.positions,d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(!1);return d}.call(this),this.lastDot=this.positions[this.positions.length-1]},e.prototype.draw=function(){var a,c,d,e,f,g;for(g=this.positions,c=e=0,f=g.length;f>e;c=++e)d=g[c],a=1e3*d/b.velocity,this.showProject(c,a);return this.positions.length>1?this.showLine():void 0},e.prototype.showLine=function(){return this.dark=this.s.line(this.dims.w/2,b.padding,this.dims.w/2,b.padding),this.dark.attr({stroke:"#4A4A4A",opacity:1,strokeWidth:.5}),this.dark.animate({y2:this.lastDot+b.padding},1e3*this.lastDot/b.velocity)},e.prototype.showProject=function(d,e){return null==e&&(e=0),a(function(a){return function(){var f;return f=a.dots[d]=a.s.circle(a.dims.w/2,a.positions[d]+b.padding,0),f.attr({fill:"#E47D42"}),console.log("drawing dot at "+d+" -> "+a.positions[d]+" with delay "+e),f.animate({r:3.5},500,mina.elastic),d===a.positions.length-1&&c.owner&&a.showPlus(a.positions[d]),b.projectVisible[d]=!0}}(this),e)},e.prototype.showPlus=function(a){return Snap.load("images/plus.svg",function(c){return function(d){var e;return c.plus=d.select("g"),c.plus.attr({"class":"plus"}),c.s.append(c.plus),c.plusBox=c.plus.getBBox(),e=c.dims.w/2-c.plusBox.width/2-1,c.plusTransform="t"+e+","+a,c.plus.transform(c.plusTransform),c.plus.click(function(){return b.$apply(function(){return b.showAdd=!b.showAdd})})}}(this))},e.prototype.rotatePlus=function(){var a;return a=b.showAdd?45:0,this.plus.animate({transform:""+this.plusTransform+" r"+a+","+this.plusBox.width/2+","+this.plusBox.height/2},200)},e}()}}}])}.call(this),function(){"use strict";angular.module("skilltreeApp").directive("skills",["$timeout",function(a){return{templateUrl:"views/partials/skills.html",restrict:"E",link:function(b,c){var d;return b.shown=[],b.mtop=110,b.padding=13,b.velocity=420,console.info("new skills directive"),b.setup=function(){return new d},a(b.setup,1e3),d=function(){function d(){var a,d,e,f,g,h;for(this.positions=[],b.shown=[],this.elem=angular.element(c[0].children[0]),this.dims={w:this.elem.width(),h:this.elem.height()},this.s=Snap("#lineSvg"),this.drawFaded(),this.getPositions(),h=this.positions,d=f=0,g=h.length;g>f;d=++f)e=h[d],a=1e3*(e+b.mtop+b.padding)/b.velocity,this.showSkill(d,a)}return d.prototype.drawFaded=function(){return this.faded=this.s.line(this.dims.w/2,0,this.dims.w/2,0),this.faded.attr({stroke:"#4A4A4A",opacity:.5,strokeWidth:.5}),this.faded.animate({y2:this.dims.h},1e3*this.dims.h/b.velocity)},d.prototype.showSkill=function(c,d){return null==d&&(d=0),a(function(){return console.info("showing skill!"),console.log(b.shown),console.log(c),b.shown[c]=!0,console.log(b.shown),b.$apply(function(){})},d)},d.prototype.getPositions=function(){var a,d,e,f;return this.parentOffset=c[0].offsetTop,console.log("parent offset is "+this.parentOffset),d=c[0].children[1].children,this.positions=function(){var b,c,f;for(f=[],e=b=0,c=d.length;c>b;e=++b)a=d[e],f.push(a.offsetTop);return f}(),b.shown=function(){var a,b,c,d;for(c=this.positions,d=[],a=0,b=c.length;b>a;a++)f=c[a],d.push(!1);return d}.call(this),console.log(this.positions),console.log("shown: "),console.log(b.shown),this.lastDot=this.positions[this.positions.length-1]},d}()}}}])}.call(this),function(){"use strict";angular.module("skilltreeApp").service("Auth",function(){var a;return a={owner:"alonso"}})}.call(this),function(){"use strict";angular.module("skilltreeApp").directive("focusOn",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){return b.$on("focusOn",function(b,e){return console.log("got focus on event!"),e===d.focusOn?(console.log("focusing "+e),a(function(){return c[0].focus()},10)):void 0})}}}])}.call(this);