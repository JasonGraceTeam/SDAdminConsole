'use strict';

/**
 * @ngdoc service
 * @name sdadminConsoleApp.utilService
 * @description
 * # utilService
 * Service in the sdadminConsoleApp.
 */
angular.module('sdadminConsoleApp')
  .service('utilService', function ($location,$http,constants) {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var SharedData = {};
    return {
    	changePage : function (url) {
    		$location.url('/' + url);
    	},
        getServiceURL : function (serviceName){
            var ServiceURL ='';
            ServiceURL = constants.PROTOCOL +'://' + constants.REMOTE_SERVER + ':'+ constants.PORT + '/' + constants.CONTEXT + '/'+ serviceName; 
            return ServiceURL; 
        },
        showErrorAlert : function (err){
          window.alert(err);
        },

        invokeService : function(success,failure,serviceName,parameters){

          var url = this.getServiceURL(serviceName) + '?parameters='+ btoa(JSON.stringify(parameters));
          $http.get(url).then(function(response) {
            success(response.data);
          },function(err){
            failure(err);
          });
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
    	},
        clearAllSharedData : function(){
            SharedData = {};
        }
    };
  });
