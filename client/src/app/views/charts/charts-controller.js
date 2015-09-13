(function(window, angular, undefined){
  function ChartsController(ExampleDataService){
    let model = this;

    model.people = {
      width: 1,
      height: 0.5,
      offsetLeft: 200,
      xKey: 'name',
      yKey: 'rank',
      classname: 'orange',
      update: function(config){
        ExampleDataService.people().then(function(response){
          model.people.data = response.data
        });
      }
    };

    model.animals = {
      width: 1,
      height: 0.5,
      offsetLeft: 140,
      xKey: 'name',
      yKey: 'years',
      classname: 'green',
      update: function(config){
        ExampleDataService.animals().then(function(response){
          model.animals.data = response.data
        });
      }
    };
  }

  ChartsController.$inject = ['ExampleDataService'];

  angular.module('simplesthing')
  .controller('ChartsController', ChartsController);
})(window, window.angular);
