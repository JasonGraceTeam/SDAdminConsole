'use strict';

/**
 * @ngdoc service
 * @name sdadminConsoleApp.models
 * @description
 * # models
 * Factory in the sdadminConsoleApp.
 */
angular.module('sdadminConsoleApp')
  .factory('models', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
