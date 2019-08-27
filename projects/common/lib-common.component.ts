import * as angular from 'angular';

(function () {
  'use strict';

  angular
    .module ('common.components')
    .component('libCommon', {
      bindings: {},
      controller: LibCommonComponent,
			controllerAs: 'vm',
			template: `
				<pre>lib-common</pre>
			`
    });

  LibCommonComponent.$inject = []

  function LibCommonComponent() {

  }
}());
