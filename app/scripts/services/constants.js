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
    PROTOCOL : 'http',
  	REMOTE_SERVER	: 	'127.0.0.1',
  	PORT	: 	'8080',
  	CONTEXT	: 	'SnackDroolWebService',
    REQ_TIMEOUT : 60,

  	/**
  	Template List
  	*/
  	PAGE_LIST 	: {
  		'LOGIN'       : 	{'URL': 'login','CONTROLLER':'LoginCtrl'},
  		'HOME'        : 	{'URL': 'home','CONTROLLER':'MainCtrl'},
  		'ORDER_LIST'  : 	{'URL': 'orderList','CONTROLLER':'OrderlistCtrl'},
  		'FORGOR_PWD'  : 	{'URL': 'forgotPassword','CONTROLLER':'ForgotpasswordCtrl'},
      'TABLES'      :   {'URL': 'tables','CONTROLLER':'TablesCtrl'}
  	},

    SERVICES        :     {
                  "LOGIN" : {PATH:"login",METHOD:{DO_LOGIN:"doLogin"}},
                  "CATEGORY" : {PATH:"category",METHOD:{GET_CAT_LST:"getCategoryList"}},
                  "PRODUCT" : {PATH:"products",METHOD:{GET_PROD_LST:"getProductsForIds",GET_PROD_LST_FR_CAT_ID:"getProductsForCatId",GET_PROD_SEARCH:"search"}},
                  "ORDER" : {PATH:"orders",METHOD:{GET_ORDR_LST:"getOrderList",ADD_ORDER:"addOrder"}},
                  "REVIEW" : {PATH:"reviews",METHOD:{GET_REVW_FR_PROD_ID:"getReviewsForProduct",SET_REVW_FR_PROD_ID:"addReviewsForProductId"}},
                  "ADDRESS" : {PATH:"address",METHOD:{GET_ADDRS_FR_DVS_ID:"getAddressForDeviceId",ADD_ADDRS_FR_DVS_ID:"addAddressForDeviceId"}}
                },
    

  });
