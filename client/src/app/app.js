
'use strict';

(function(window, angular, undefined) {

  angular.module('simplesthing', [
    'ngLodash',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'cgBusy'
  ])
  .config([ '$stateProvider','$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.when('', '/home');

      $stateProvider
        .state('home', {
          url: '/home',
          views : {
            'main' : {
              templateUrl : 'app/views/home/home.html'
            }
          }
        })
        // .state('charts', {
        //   url: '/charts',
        //   views: {
        //     'main' : {
        //       templateUrl: 'app/views/charts/charts.html'
        //     }
        //   }
        // })
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
