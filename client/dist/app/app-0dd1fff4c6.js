"use strict";!function(window,angular,undefined){angular.module("simplesthing",["ngLodash","ui.bootstrap","ui.router","ngSanitize","cgBusy","duScroll","angularD3Miso"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{url:"/home",views:{nav:{templateUrl:"app/views/navbar/navbar.html"},main:{templateUrl:"app/views/home/home.html"},footer:{templateUrl:"app/views/footer/footer.html"}}}).state("archive",{url:"/archive",views:{nav:{templateUrl:"app/views/navbar/navbar.html"},main:{templateUrl:"app/views/archive/archive.html"},footer:{templateUrl:"app/views/footer/footer.html"}}}).state("style",{url:"/style",views:{main:{templateUrl:"app/views/style-guide/style-guide.html"}}})}]).value("cgBusyDefaults",{templateUrl:"app/components/cg-busy/cg-busy-template.html",backdrop:!1,minDuration:250})}(window,window.angular),function(window,angular,undefined){function NavbarController($state,$document,$timeout){var model=this;model.navbarCollapsed=!0,model.navigate=function(state,anchor){$state.go(state).then(function(){anchor&&($timeout(function(){var _anchor=angular.element(document.getElementById(anchor));$document.scrollToElement(_anchor,0,500)}),model.navbarCollapsed===!1&&(model.navbarCollapsed=!0))})}}NavbarController.$inject=["$state","$document","$timeout"],angular.module("simplesthing").controller("NavbarController",NavbarController)}(window,window.angular),function(window,angular,undefined){function HomeController($document,$modal,ExampleDataService){var model=this;model.blogCollapse=!0,model.blogCollapseStatus="More",model.portfolio=[{id:"angularD3",image:"angular-d3.png",name:"Angular D3 miso",date:"2015"},{id:"bootcamp",image:"bootcamp.png",name:"Career Bootcamp",date:"2014 - 2015"},{id:"amazon",image:"amazon.png",name:"Amazon Widgets",date:"2013 - 2014"},{id:"webcomponent",image:"web-component.png",name:"Polymer Web Component",date:"2014"},{id:"nordstrom",image:"nordstrom.png",name:"Nordstrom",date:"2012 - 2013"},{id:"disney",image:"disney-chat.png",name:"Disney Interactive",date:"2011 - 2012"}];var data={};ExampleDataService.people().then(function(response){data.people=response.data}),ExampleDataService.animals().then(function(response){data.animals=response.data}),model.people={title:"10 Influential People Who Never Existed",footnote:'Data examples were obtained from <a href="http://listverse.com/2008/11/03/top-10-influential-people-who-never-lived/" target="_blank">listverse.com</a>',offsetLeft:200,xKey:"name",yKey:"rank",classname:"orange"},model.animals={title:"10 Species That Are Surprisingly Ancient",footnote:'Data examples were obtained from <a href="http://listverse.com/2015/07/02/10-species-that-are-surprisingly-ancient/" target="_blank">listverse.com</a>',offsetLeft:140,xKey:"name",yKey:"years",classname:"green"},model.chart={chart:"horizontal-bar",dataOptions:["people","animals"],selected:"people",width:1,height:.5,update:function(config){model.chart=angular.extend(config,model[config.selected]),model.chart.data=data[config.selected]}},model.open=function(name){$modal.open({animation:!1,templateUrl:"app/views/home/portfolio/"+name+".html",controller:["$scope","$modalInstance","chart",function($scope,$modalInstance,chart){$scope.cancel=function(){$modalInstance.dismiss("cancel")},$scope.interval=4e3,$scope.noWrapSlides=!1,$scope.nordSlides=[{image:"images/portfolio/nordstrom/thread.png"},{image:"images/portfolio/nordstrom/wedding.png"},{image:"images/portfolio/nordstrom/men.png"},{image:"images/portfolio/nordstrom/beauty.png"},{image:"images/portfolio/nordstrom/bp.png"}],$scope.chart=chart}],size:"lg",resolve:{chart:function(){return model.chart}}})}}HomeController.$inject=["$document","$modal","ExampleDataService"],angular.module("simplesthing").controller("HomeController",HomeController)}(window,window.angular),function(window,angular,undefined){function Archive(ExampleDataService){}Archive.$inject=["ExampleDataService"],angular.module("simplesthing").controller("ArchiveController",Archive)}(window,window.angular),function(window,angular,undefined){function ExampleDataService($http){var model=this;return model.people=function(){return $http.get("app/services/data/top-10-influential-people-who-never-lived.json")},model.animals=function(){return $http.get("app/services/data/10-species-that-are-surprisingly-ancient.json")},model.monsters=function(){return $http.get("app/services/data/10-japanese-monsters-that-will-kill-you.json")},model}ExampleDataService.$inject=["$http"],angular.module("simplesthing").service("ExampleDataService",ExampleDataService)}(window,window.angular),!function(){function e(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent("on"+n,t)}function n(e,n,t){e.removeEventListener?e.removeEventListener(n,t):e.detachEvent("on"+n,t)}function t(e,n){e.length||(e=[e]);for(var t in n)for(var o=0;o<e.length;o++)e[o].style[t]=n[t]}function o(e,n){if(n=n||document,document.getElementsByClassName)return n.getElementsByClassName(e);for(var t=n.getElementsByTagName("*"),o=[],i=0;i<t.length;i++)if(new RegExp("(^|\\s+)"+e+"(\\s+|$)","g").test(t[i].className)){o.push(t[i]);break}return o}function i(e){if(!d)return!!e.eh5v;switch(s){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[s+"FullScreen"]}}function r(e){for(var n="",t=0;t<e.length;t++)n+=String.fromCharCode(e.charCodeAt(t)^1+(e.length-t)%7);return n}function a(n){if(d)return""===s?n.requestFullScreen():n[s+"RequestFullScreen"]();if(n){h&&l(h);var t={position:"fixed",left:0,top:0,right:"auto",bottom:"auto",width:window.innerWidth+"px",height:window.innerHeight+"px",backgroundColor:"rgba(0,0,0,0.9)",border:"none",zIndex:9999999};n.eh5v={};for(var o in t)n.eh5v[o]=n.style[o];for(var o in t)n.style[o]=t[o];e(document.body,"keydown",u),h=n}}function l(e){if(d)return""===s?document.cancelFullScreen():document[s+"CancelFullScreen"]();if(e){for(var t in e.eh5v)e.style[t]=e.eh5v[t];e.eh5v=0,n(document.body,"keydown",u),h=0}}function u(e){27==e.keyCode&&l(h)}function c(n,o){function u(){b.style.display="none"}function c(){E.style.display="none"}function d(){for(var e in S)S[e]&&S[e].item&&S[e].show&&(S[e].item.style.display=S[e].show()?"block":"none")}var s=n,p="@ep{Iski1Ukebi+glo";if(p&&(p=r(p))){var f=n.getElementsByTagName("video")[0];if(f&&!f.eh5v){var m=r("'p!8!%g'(# iucc&9\"#orqt9-.bgv}kvlk3smggn)eji!.");m+=r('#wivmwkni$?$!pdkgqmug#+&\'`jqqkg|&9"#ejjgh -%`jjw/rn|`&9"#63u|!.');var h=s||document.body;if(p.length<4&&(p=p.replace(/^\s+|\s+$/g,"")),s=p?document.createElement("div"):0,s&&(t(s,{position:"absolute",padding:"0 0 0 0"}),h.appendChild(s)),s&&document.all){var v=document.createElement("iframe");t(v,{position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)",opacity:.01}),v.src="javascript:false",v.scrolling="no",v.framespacing=0,v.border=0,v.frameBorder="no",s.appendChild(v)}if(s&&(t(s,{zIndex:56,right:"5px",top:"5px"}),h.appendChild(s)),m+=r("%ql`wj#=&'evvn%*'lfkfor'># `rrj&/ ghhq)eclnj|&9\"#Ftleo "),s?!function(){var e=m.split(",");for(var n in e)e[n].replace(/\"(.*?)\":.*?\"(.*?)\"/g,function(e,t,o){0==n?m=document.createElement(o):1==n?m[t]=o:m.style[t]=o})}():m=s,m&&(t(m,{display:"block",opacity:0,visibility:"visible","font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}),m.innerHTML=p,m.target="_blank",e(m,"contextmenu",function(){return!1}),s?s.appendChild(m):document.body.appendChild(m)),f.eh5v={fullScreen:function(e){return e?a(f):i(f)&&l(f),i(f)}},/(iPad|iPhone|iPod)/gi.test(navigator.userAgent)){var y=new Image;y.style.visibility="hidden",y.src=f.poster,n.appendChild(y),f.style.position="absolute",f.style.height="100%"}var b;if(!o.noFS&&f.getAttribute("controls")&&(window.opera||/MSIE/.test(navigator.userAgent)||navigator.mozVibrate)&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var x=/(.*\/)[^\/]+/.exec(f.poster)[1]+"fullscreen.png";g||(g=new Image,g.src=x),b=document.createElement("div"),t(b,{position:"absolute",zIndex:10,display:"none",right:"0px",top:"0px",width:"28px",height:"28px",background:'rgba(0,0,0,0.50) url("'+x+'") 50% 50% no-repeat',border:"none"}),f.parentNode.appendChild(b),e(f,"mouseover",function(){b.style.display="block"}),e(f,"mouseout",function(){u()}),e(b,"mouseover",function(){b.style.display="block"}),e(b,"click",function(){a(f),u()})}if(e(f,"dblclick",function(){i(f)?l(f):a(f),b&&setTimeout(u,100)}),null==f.getAttribute("loop")&&e(f,"ended",function(){setTimeout(function(){f.load(),f.pause()},400)}),/Android/.test(navigator.userAgent))for(var k,w=f.getElementsByTagName("source"),C=w.length-1;C>=0;C--)w[C].type?k&&/mp4/.test(w[C].type)&&(w[C].src=k,f.load()):k=w[C].src;if(null==f.getAttribute("controls")&&e(f,"click",function(e){e.preventDefault(),f.paused||f.ended?f.play():f.pause()}),o.preventCopy){var E=document.createElement("ul"),S=[{label:"Pause",click:function(){f.pause()},show:function(){return!f.paused}},{label:"Play",click:function(){f.play()},show:function(){return f.paused}},{label:"Mute",click:function(){f.muted=!0},show:function(){return!f.muted}},{label:"Unmute",click:function(){f.muted=!1},show:function(){return f.muted}}];t(E,{position:"absolute",display:"none",listStyleType:"none",margin:"0px",padding:"0px",background:"#fff",cursor:"pointer",zIndex:2147483647,WebkitBoxShadow:"2px 2px 10px #313131",MozBoxShadow:"2px 2px 10px #313131",boxShadow:"2px 2px 10px #313131"}),e(E,"contextmenu",function(e){e.preventDefault()}),e(E,"click",c),e(window,"resize",c),e(document,"click",c),e(document,"contextmenu",c);for(var F in S){var j=document.createElement("li");t(j,{margin:"0px",padding:"3px 20px"}),j.innerHTML=S[F].label,E.appendChild(j),e(j,"click",S[F].click),e(j,"mouseover",function(){t(this,{backgroundColor:"#4281F4",color:"#fff"})}),e(j,"mouseleave",function(){t(this,{backgroundColor:"transparent",color:"#000"})}),S[F].item=j}n.appendChild(E),e(f,"contextmenu",function(e){t(E,{left:e.pageX-(i(f)?0:n.offsetLeft)+"px",top:e.pageY-(i(f)?0:n.offsetTop)+"px",display:"block"}),e.preventDefault(),e.stopPropagation()}),d(),e(window,"load",d),e(f,"pause",d),e(f,"play",d),e(f,"volumechange",d)}}}}var d=0,s="";if("undefined"!=typeof document.cancelFullScreen)d=!0;else for(var p="webkit moz o ms khtml".split(" "),f=0,m=p.length;m>f;f++)if(s=p[f],"undefined"!=typeof document[s+"CancelFullScreen"]){d=!0;break}for(var g,h=0,v=o("easyhtml5video"),f=0;f<v.length;f++)c(v[f],{noFS:0,preventCopy:1})}(),function(window,angular,undefined){function d3(){return window.d3}angular.module("d3Service",[]).factory("d3",d3)}(window,window.angular),function(window){function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)")}function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}var hasClass,addClass,removeClass;"classList"in document.documentElement?(hasClass=function(elem,c){return elem.classList.contains(c)},addClass=function(elem,c){elem.classList.add(c)},removeClass=function(elem,c){elem.classList.remove(c)}):(hasClass=function(elem,c){return classReg(c).test(elem.className)},addClass=function(elem,c){hasClass(elem,c)||(elem.className=elem.className+" "+c)},removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c)," ")});var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};"function"==typeof define&&define.amd?define(classie):window.classie=classie}(window);var cbpAnimatedHeader=function(){function init(){window.addEventListener("scroll",function(event){didScroll||(didScroll=!0,setTimeout(scrollPage,250))},!1)}function scrollPage(){var header=document.querySelector(".navbar-fixed-top"),sy=scrollY();sy>=changeHeaderOn?classie.add(header,"navbar-shrink"):classie.remove(header,"navbar-shrink"),didScroll=!1}function scrollY(){return window.pageYOffset||docElem.scrollTop}var docElem=document.documentElement,didScroll=!1,changeHeaderOn=300;init()}();