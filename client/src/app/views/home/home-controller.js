'use strict';
(function(window, angular, undefined) {
  function HomeController($document, $modal){
    let model = this;

    model.blogCollapse       = true;
    model.blogCollapseStatus = 'More';

    model.toggleBlog = function (){
      model.blogCollapse       = !model.blogCollapse;
      model.blogCollapseStatus = model.blogCollapse ? 'More' : 'Less';

      let archive = angular.element(document.getElementById('blog'));
      $document.scrollToElement(archive, 0, 500);
    }

    model.portfolio = [
     {
          id    : 'angularD3',
          image : 'angular-d3.png',
          name  : 'Angular D3 miso',
          date  : '2015'
      },
      {
          id    : 'bootcamp',
          image : 'bootcamp.png',
          name  : 'Career Bootcamp',
          date  : '2014 - 2015'
      },
      {
          id    : 'amazon',
          image : 'amazon.png',
          name  : 'Amazon Widgets',
          date  : '2013 - 2014'
      },
      {
          id    : 'webcomponent',
          image : 'web-component.png',
          name  : 'Polymer Web Component',
          date  : '2014'
      },
      {
          id    : 'disney',
          image : 'disney-chat.png',
          name  : 'Disney Interactive',
          date  : '2011 - 2012'
      },
      {
          id    : 'wordpress',
          image : 'wordpress.png',
          name  : 'WordPress Themes',
           date  : '2012 - 2015'
      },
    ];


    model.open = function(name){
      let modalInstance = $modal.open({
        animation: false,
        templateUrl: 'app/views/home/portfolio/'+name+'.html',
        controller: function($scope, $modalInstance){
          $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
          }
        },
        size: 'lg'
      });
    };

  }


  HomeController.$inject = ['$document', '$modal'];

  angular.module('simplesthing')
  .controller('HomeController', HomeController);
})(window, window.angular);
