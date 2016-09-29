'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:DadoCtrl
 * @description
 * # DadoCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('DadoCtrl', function ($scope) {

	$scope.sorteado;
	var num;
	$scope.sortear = function (){
		num = Math.floor(Math.random() * 6 + 1);
	$scope.sorteado="images/dado" + num + ".jpg";
	}
	/*$scope.sortea = function (){
		num2 = Math.floor(Math.random() * 6 + 1);
	$scope.sorteado="images/dado" + num + ".jpg";
	}

	$scope.soma = function(){
		return num + num2;
	}*/
  });
