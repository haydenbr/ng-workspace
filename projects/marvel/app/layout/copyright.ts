import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.layout')
        .component('ngaCopyright', {
            controller: Copyright,
            controllerAs: 'vm',
            templateUrl: 'app/layout/copyright.html'
        });

    Copyright.$inject = ['settings'];

    function Copyright(settings) {
        var vm = this;

        vm.version = '';
        vm.$onInit = onInit;

        function onInit() {
            vm.version = settings.version;
        }
    }
})();
