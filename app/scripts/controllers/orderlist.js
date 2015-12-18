'use strict';

/**
 * @ngdoc function
 * @name sdadminConsoleApp.controller:OrderlistCtrl
 * @description
 * # OrderlistCtrl
 * Controller of the sdadminConsoleApp
 */
angular.module('sdadminConsoleApp')
  .controller('OrderlistCtrl', function ($scope,models,$interpolate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.Products;
    $scope.Reviews;
    $scope.Category;
    models.getProducts([1,2,3]).then(function(productList){
        $scope.Products = productList;
    });
    models.getReviews([1]).then(function(resp){
        $scope.Reviews = resp;
    });
    models.getCategories().then(function(resp){
        $scope.Category = resp;
    });
  });
