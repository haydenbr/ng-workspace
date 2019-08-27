import * as ng from 'angular';

export class LibCommonService {
  static $inject = ['$http'];

  constructor(private $http: ng.IHttpService) { }

  getData = () => this.$http.get('https://jsonplaceholder.typicode.com/posts/1');

  hey = () => console.log('hey from LibCommonService!!!');
}

ng.module('common.services')
  .service('LibCommonService', LibCommonService)
