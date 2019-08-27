// import * as angular from 'angular';

(function () {
  'use strict';

  console.log('hello!', angular.isArray([]));

  angular
    .module ('ngaApp.widgets')
    .component('ngaFooBar', {
      controller: fooBarController,
      controllerAs: 'vm',
      templateUrl: 'app/widgets/foo-bar.component.html'
    });

  function fooBarController() {
    var vm = this;

    vm.message = 'Interpolated!'

    vm.onInit$ = function () {
      console.log('hey this is init!!!');
    }

    vm.saySomething = function () {
      alert('helloooooo!');
    }
  }
})();
