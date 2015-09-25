
'use strict';

(function(window, angular, undefined) {

  angular.module('simplesthing', [
    'ngLodash',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'cgBusy',
    'duScroll'
  ])
  .config([ '$stateProvider','$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider){
      // $urlRouterProvider.when('', '/home');
      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state('home', {
          url: '/home',
          views : {
            'nav'  : {
              templateUrl: 'app/views/navbar/navbar.html'
            },
            'main' : {
              templateUrl : 'app/views/home/home.html'
            },
            'footer' : {
              templateUrl: 'app/views/footer/footer.html'
            }
          }
        })
        .state('archive', {
          url: '/archive',
          views: {
            'nav'  : {
              templateUrl: 'app/views/navbar/navbar.html'
            },
            'main': {
              templateUrl : 'app/views/archive/archive.html'
            },
            'footer' : {
              templateUrl: 'app/views/footer/footer.html'
            }
          }
        })
        .state('style', {
          url: '/style',
          views : {
            'main' : {
              templateUrl : 'app/views/style-guide/style-guide.html'
            }
          }
        });
    }
  ])
  .value('cgBusyDefaults', {
    templateUrl: 'app/components/cg-busy/cg-busy-template.html',
    backdrop: false,
    minDuration: 250
  });

})(window, window.angular);
