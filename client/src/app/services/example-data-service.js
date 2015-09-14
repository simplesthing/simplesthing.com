'use strict';
(function(window, angular, undefined){
  function ExampleDataService($http){
    let model = this;
    model.people   = function(){
      return $http.get('app/services/data/top-10-influential-people-who-never-lived.json');
    }
    model.animals  = function(){
      return $http.get('app/services/data/10-species-that-are-surprisingly-ancient.json');
    };
    model.monsters = function(){
      return $http.get('app/services/data/10-japanese-monsters-that-will-kill-you.json')
    };
    return model;
  }

  ExampleDataService.$inject = ['$http'];

  angular.module('simplesthing')
  .service('ExampleDataService', ExampleDataService);

})(window, window.angular);
