'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:PortaCtrl
 * @description
 * # PortaCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('PortaCtrl', function ($scope) {
   
	$scope.portas = [];
	/*$scope.portas[0] = 1;
	$scope.portas[1] = 2;
	$scope.portas[2] = 3;
	*/
	var posPremio = Math.floor(Math.random() * 3 + 0);
	var posMostra = Math.floor(Math.random() * 3 + 0);
	var posTroca = Math.floor(Math.random() * 3 + 0);
	var posSelecionada;

	$scope.fazJogo = function (pos) {

		posSelecionada = pos;

		for (var i = 0; posMostra == posSelecionada || posMostra == posPremio; i++) {
			posMostra = i;
		}

		$scope.portas[posMostra] = "X";

		$('#options').modal('show');
	}

	$scope.troca = function () {
				
		
		for (var i = 0; posTroca == posMostra || posTroca == posSelecionada; i++) {
			posTroca = i;
		}


		if (posTroca == posPremio) {
			$scope.portas[posPremio] = "O";
			$scope.portas[posSelecionada] = "X";
			alert("Parabéns você ganhou!");
		}
		else{
			$scope.portas[posPremio] = "O";
			$scope.portas[posTroca] = "X";
			alert("Você Perdeu!");
		}
	}

	$scope.naoTroca = function () {
	for (var i = 0; posTroca == posMostra || posTroca == posSelecionada; i++) {
			posTroca = i;
		}
		if (posSelecionada == posPremio) {
			$scope.portas[posPremio] = "O";
			$scope.portas[posTroca] = "X";
			alert("Parabéns você ganhou!");
		}
		else{
			$scope.portas[posPremio] = "O";
			$scope.portas[posSelecionada] = "X";
			alert("Você Perdeu!");
		}
	}



  });
