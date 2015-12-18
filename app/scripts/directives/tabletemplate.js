'use strict';

/**
 * @ngdoc directive
 * @name sdadminConsoleApp.directive:tabletemplate
 * @description
 * # tabletemplate
 */
angular.module('sdadminConsoleApp')
  .directive('tabletemplate', function ($uibModal,$log,models) {
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
        scope.searchItem = function(){
              models.searchProducts(scope.searchTxt).then(function(productList){
                scope.details = productList;
              });
        }
        var openModal = function (tableName,record) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/tbleditmodal.html',
            controller: function($scope){
              $scope.title = tableName;
              $scope.tableKeys = Object.keys(record);
              $scope.record = record;
              $scope.saveChanges = function(){
                var editValues = {};
                editValues.title = tableName;
                for (var i = 0; i < $scope.tableKeys.length; i++) {
                  editValues[$scope.tableKeys[i]]  = document.getElementById($scope.tableKeys[i]).value;
                }
                modalInstance.close(editValues);
              }
              $scope.closeModal = function(){
                modalInstance.dismiss();
              }
            },
            size: 'lg',
            resolve: {
              edititems: function () {
                return record;
              }
            }
          });
          modalInstance.result.then(function(updateValues) {
            models.updateProducts(updateValues).then(function(result){
              console.log('result');
            });
          }, function () {
            console.log('Modal dismissed at: ' + new Date());
          });
        }; 
        scope.editItem = function(tableName,record){
          console.log(tableName);
          console.log(record);
          openModal(tableName,record);
        }
      }
    };
  });
