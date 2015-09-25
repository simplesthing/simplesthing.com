'use strict';
(function (window, angular, undefined) {
  function HomeController($document) {
    var model = this;
    model.blogCollapse = true;
    model.blogCollapseStatus = 'More';
    model.toggleBlog = function () {
      model.blogCollapse = !model.blogCollapse;
      model.blogCollapseStatus = model.blogCollapse ? 'More' : 'Less';
      var archive = angular.element(document.getElementById('blog'));
      $document.scrollToElement(archive, 0, 100);
    };
  }

  HomeController.$inject = ['$document'];

  angular.module('simplesthing').controller('HomeController', HomeController);
})(window, window.angular);