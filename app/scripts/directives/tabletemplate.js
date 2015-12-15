'use strict';

/**
 * @ngdoc directive
 * @name sdadminConsoleApp.directive:tabletemplate
 * @description
 * # tabletemplate
 */
angular.module('sdadminConsoleApp')
  .directive('tabletemplate', function () {
    return {
		  restrict :'EA',
      templateUrl : "views/tabletemplate.html" ,
      scope: {
        	details: '=',
    	},
      link: function (scope, element, attrs) {
        scope.$watch('details', function(newVal,old) {
          if(newVal){
            scope.dataheaders = Object.keys(newVal.response[0]);
            scope.data = newVal.response;
          }
        },true);       
      }
    };
  });
