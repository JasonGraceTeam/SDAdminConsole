'use strict';

/**
 * @ngdoc overview
 * @name sdadminConsoleApp
 * @description
 * # sdadminConsoleApp
 *
 * Main module of the application.
 */
angular
  .module('sdadminConsoleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/forgotPassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'ForgotpasswordCtrl',
        controllerAs: 'forgotPassword'
      })
      .when('/orderList', {
        templateUrl: 'views/orderlist.html',
        controller: 'OrderlistCtrl',
        controllerAs: 'orderList'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl',
        controllerAs: 'tables'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
