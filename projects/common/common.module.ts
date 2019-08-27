import * as ng from 'angular';

(function () {
  'use strict';

  ng.module('common.services', []);
  ng.module('common.components', []);

  ng
    .module('common', [
      'common.services',
      'common.components'
    ]);
})();
