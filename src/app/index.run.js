(function() {
  'use strict';

  angular
    .module('weatherForecast')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
