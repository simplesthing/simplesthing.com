(function(window, angular, undefined){

  function NavbarController($state, $document, $timeout){
    let model = this;

    model.navigate = function(state, anchor){
      $state.go(state).then(function(){
        if(anchor) {
         $timeout(function(){
          let _anchor = angular.element(document.getElementById(anchor));
          $document.scrollToElement(_anchor, 0, 500);
         })
        }
      });
    };
  }

  NavbarController.$inject = ['$state', '$document', '$timeout'];

  angular.module('simplesthing')
  .controller('NavbarController', NavbarController);
})(window, window.angular);
