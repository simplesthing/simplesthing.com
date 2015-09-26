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
          image : 'dashboard.png',
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
          id    : 'nordstrom',
          image : 'nordstrom.png',
          name  : 'Nordstrom',
           date  : '2012 - 2013'
      },
      {
          id    : 'disney',
          image : 'disney-chat.png',
          name  : 'Disney Interactive',
          date  : '2011 - 2012'
      }
    ];


    model.open = function(name){
      let modalInstance = $modal.open({
        animation: false,
        templateUrl: 'app/views/home/portfolio/'+name+'.html',
        controller: function($scope, $modalInstance){
          $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
          }
          $scope.interval = 4000;
          $scope.noWrapSlides = false;
          $scope.nordSlides = [
            {image: 'images/portfolio/nordstrom/thread.png'},
            {image: 'images/portfolio/nordstrom/wedding.png'},
            {image: 'images/portfolio/nordstrom/men.png'},
            {image: 'images/portfolio/nordstrom/beauty.png'},
            {image: 'images/portfolio/nordstrom/bp.png'},
          ];

        },
        size: 'lg'
      });
    };

  }


  HomeController.$inject = ['$document', '$modal'];

  angular.module('simplesthing')
  .controller('HomeController', HomeController);
})(window, window.angular);
