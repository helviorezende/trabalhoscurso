'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:RevisaoCtrl
 * @description
 * # RevisaoCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('RevisaoCtrl', function ($scope) {
    
    $scope.contador1 = 0;
    $scope.contador2 = 0;

    $scope.incrementa = function(){
    	$scope.contador1 = $scope.contador1 + 1;
    }

    $scope.incrementa2 = function(){
    	$scope.contador2 = $scope.contador2 + 1;
    }


  });
