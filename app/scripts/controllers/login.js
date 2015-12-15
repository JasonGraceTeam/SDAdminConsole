'use strict';

/**
 * @ngdoc function
 * @name sdadminConsoleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sdadminConsoleApp
 */
angular.module('sdadminConsoleApp')
  .controller('LoginCtrl', function ($scope,$location,constants,utilService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.username = 'Vishwa.vijay14@gmail.com';
    $scope.password = 'Zangetsu';
    $scope.submitLogin = function(){
    	utilService.changePage(constants.PAGE_LIST.HOME.URL);
    };
    $scope.forgotPassword = function(){
    	utilService.changePage(constants.PAGE_LIST.FORGOT_PWD.URL);
    };
  });
