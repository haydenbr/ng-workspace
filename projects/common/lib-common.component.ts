import * as ng from 'angular';

class LibCommonComponent implements ng.IComponentController {
	static $inject = ['$log'];

	message = 'message from lib-common';

	constructor(private $log: ng.ILogService) { }

	$onInit() {
		this.$log.info('init from lib-common component');
	}
}

ng
	.module ('common.components')
	.component('libCommon', {
		bindings: {},
		controller: LibCommonComponent,
		controllerAs: 'vm',
		// template: `
		// 	<pre>lib-common</pre>
		// 	<b>{{vm.message}}</b>
		// `
		templateUrl: 'common/lib-common.component.html'
	});
