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
      // For any unmatched url, redirect to /overview
      $urlRouterProvider.when('', '/style-guide');

      $stateProvider
        .state('styles', {
          url: '/style-guide',
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
