'use strict';

/**
 * @ngdoc service
 * @name sdadminConsoleApp.utilService
 * @description
 * # utilService
 * Service in the sdadminConsoleApp.
 */
angular.module('sdadminConsoleApp')
  .service('utilService', function ($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var SharedData = {};
    return {
    	changePage : function (url) {
    		$location.url('/' + url);
    	},

    	getSharedData : function(key){
    		return SharedData[key];
    	},

    	setSharedData : function(key,data){
    		if (data) {
    			SharedData[key] = data;
    			return true;
    		}
    		return false;
    	}
    };
  });
