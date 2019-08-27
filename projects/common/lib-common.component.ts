import * as angular from 'angular';
import { IHttpService } from 'angular';

(function () {
  'use strict';

  angular
    .module ('common.components')
    .component('libCommon', {
      bindings: {},
      controller: LibCommonComponent,
      controllerAs: 'vm',
    });

  LibCommonComponent.$inject = ['$http']

  function LibCommonComponent($http: IHttpService) {

  }
}());
