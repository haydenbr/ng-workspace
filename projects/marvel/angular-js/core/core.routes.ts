import * as angular from 'angular';

(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function configure($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.hashPrefix('')

        $stateProvider
            .state('main', {
                url: '/',
                template: '<nga-character-list></nga-character-list>'
            })
            .state('quiz', {
                url: '/quiz',
                template: '<nga-quiz></nga-quiz>'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
