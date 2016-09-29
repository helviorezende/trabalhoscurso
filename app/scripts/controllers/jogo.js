'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:JogoCtrl
 * @description
 * # JogoCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('JogoCtrl', function ($scope) {
   
$scope.tabuleiro = [];
var vez="images/cruzeiro.jpeg";
var contador = 0;

$scope.jogar = function(posicao){
	$scope.tabuleiro[posicao]=$scope.qualJogador();
	contador ++;
}

$scope.verificaFimJogo = function(){
	if(contador == 9){
		return "DEU VELHA";
	}
}

$scope.qualJogador = function(){
	if(contador % 2 === 0){
		return 'images/cruzeiro.jpeg';
	}
	else{
		return 'images/atletico.jpg';
	}
}
$scope.limpar = function(){
	$scope.tabuleiro = [];
	contador=0;
}
/*
for (i=0;i<resposta.length; i++){
	if (f(resposta[i])){
	console.log(resposta[i],'=>',f(resposta[i]));
	break;
	}
}
*/
  });
