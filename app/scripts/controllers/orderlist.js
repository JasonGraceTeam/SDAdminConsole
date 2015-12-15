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
    var data = [{
    	orderId 	: '1',
    	address		: 'Vishwas HK 9916859569 Nagawara A2b opposite Bangalore 560045',
    	status 		: 'placed',
    	last_update	: '10-12-2015 11:45:25'	
    },
    {
    	orderId 	: '2',
    	address		: 'Vishwas HK 9916859569 Nagawara A2b opposite Bangalore 560045',
    	status 		: 'placed',
    	last_update	: '10-12-2015 10:45:25'	
    },
    {
    	orderId 	: '3',
    	address		: 'Vishwas HK 9916859569 Nagawara A2b opposite Bangalore 560045',
    	status 		: 'placed',
    	last_update	: '10-12-2015 12:45:25'	
    }];
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
