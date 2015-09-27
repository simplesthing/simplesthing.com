'use strict';
(function(window, angular, undefined) {
  function HomeController($document, $modal, ExampleDataService){
    let model = this;

    model.blogCollapse       = true;
    model.blogCollapseStatus = 'More';

    model.toggleBlog = function (){
      model.blogCollapse       = !model.blogCollapse;
      model.blogCollapseStatus = model.blogCollapse ? 'More' : 'Less';

      let archive = angular.element(document.getElementById('blog'));
      $document.scrollToElement(archive, 0, 500);
    };

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

    model.people = {
      title: '10 Influential People Who Never Existed',
      footnote: 'Data examples were obtained from <a href="http://listverse.com/2008/11/03/top-10-influential-people-who-never-lived/" target="_blank">listverse.com</a>',
      offsetLeft: 200,
      xKey: 'name',
      yKey: 'rank',
      classname: 'orange'
    };

    model.animals = {
      title:'10 Species That Are Surprisingly Ancient',
      footnote: 'Data examples were obtained from <a href="http://listverse.com/2015/07/02/10-species-that-are-surprisingly-ancient/" target="_blank">listverse.com</a>',
      offsetLeft: 140,
      xKey: 'name',
      yKey: 'years',
      classname: 'green'
    };

    model.chart = {
      chart: 'horizontal-bar',
      dataOptions: ['people', 'animals'],
      selected : 'people',
      width: 1,
      height: 0.5,
      update: function(config){
        model.chart = angular.extend(config, model[config.selected]);
        ExampleDataService[config.selected]().then(function(response){
          model.chart.data = response.data;
        });
      }
    };

    model.open = function(name){
      $modal.open({
        animation: false,
        templateUrl: 'app/views/home/portfolio/'+name+'.html',
        controller: function($scope, $modalInstance, chart){
          $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
          };
          $scope.interval = 4000;
          $scope.noWrapSlides = false;
          $scope.nordSlides = [
            {image: 'images/portfolio/nordstrom/thread.png'},
            {image: 'images/portfolio/nordstrom/wedding.png'},
            {image: 'images/portfolio/nordstrom/men.png'},
            {image: 'images/portfolio/nordstrom/beauty.png'},
            {image: 'images/portfolio/nordstrom/bp.png'},
          ];
          $scope.chart = chart;
        },
        size: 'lg',
        resolve: {
          chart : function(){
            return model.chart;
          }
        }
      });
    };

  }


  HomeController.$inject = ['$document', '$modal', 'ExampleDataService'];

  angular.module('simplesthing')
  .controller('HomeController', HomeController);
})(window, window.angular);
