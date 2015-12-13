'use strict';

/**
 * @ngdoc service
 * @name sdadminConsoleApp.constants
 * @description
 * # constants
 * Constant in the sdadminConsoleApp.
 */
angular.module('sdadminConsoleApp')
  .constant('constants', {
  	'host'	: 	'localhost',
  	'port'	: 	'8080',
  	'context'	: 	'',

  	/**
  	Template List
  	*/
  	pagelist 	: {
  		'login' : 	{'url': 'login','controller':'LoginCtrl'},
  		'home' : 	{'url': 'home','controller':'MainCtrl'},
  		'orderList' : 	{'url': 'orderList','controller':'OrderlistCtrl'},
  		'forgotPassword' : 	{'url': 'forgotPassword','controller':'ForgotpasswordCtrl'}
  	}
  });
