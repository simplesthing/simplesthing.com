'use strict';

(function(window, angular, undefined){
  function Archive(ExampleDataService){

  }

  Archive.$inject = ['ExampleDataService'];

  angular.module('simplesthing')
  .controller('ArchiveController', Archive);
})(window, window.angular);
