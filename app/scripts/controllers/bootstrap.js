'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BootstrapCtrl
 * @description
 * # BootstrapCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('BootstrapCtrl', function ($scope) {
/*    
var conta = $scope.mostrar;

  	function mostrar(){
  		var n=0;
  		return function contador(){
  			return n++;
  		}
  	}

var seq=function sequencia(){
	var p=0;
	return function continua(){
		p = p + 1;
		return p;
	}
}


var fib=function fibonacci(){

	var x=0;
	var ant = 0;
	var guarda = 0;

	return function () {
		if(x==0){
			x++;
			return 1;
		}
		else{
			guarda = x;
			x = x + ant;
			ant = guarda;
			return x;

		}
	}
}

var fib2 = function fibonacci(){
var x=0;
var ant=1;

return function(){
var guarda = ant;
ant = x;
x = guarda + ant;
return x;
}
}();
*/

$scope.calculo=function() {

	$scope.resultado=$scope.x+$scope.y;
}

  });
