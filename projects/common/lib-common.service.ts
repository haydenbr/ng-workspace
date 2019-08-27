import * as ng from 'angular';

(function () {
  'use strict';

  ng.module('common.services')
    .service('LibCommonService', LibCommonService)

  LibCommonService.$inject = ['$http']

  function LibCommonService($http: ng.IHttpService) {
    var service: any = {};

    service.getStuff = () => $http.get('https://jsonplaceholder.typicode.com/posts/1');

    service.hey = () => console.log('hey from LibCommonService!!!');

    return service;
  }
}());
