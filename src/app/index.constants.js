/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('weatherForecast')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
