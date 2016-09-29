'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:CalculadoraCtrl
 * @description
 * # CalculadoraCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('CalculadoraCtrl', function ($scope) {
    
   var memoria = 0;
    
    $scope.display = 0;
    
    var funcao = 0;
    
    var valor1= 0;
    
    var valor2 =0;
    
    var valoraux =0;

    var operacao;

    var flag = false;

    var jaPressioneIgual =false;

//$scope.display = 10 - 0.5;

    $scope.operacao = function(x){
        $scope.display = $scope.display * 10 + x;
        }

    $scope.soma= function(x){
        valor1 = $scope.display;
        $scope.display =0;

        funcao = 1;
        jaPressioneIgual = false;
        console.log(funcao);
    }

    $scope.subtrai= function(){
        valor1 = $scope.display;
        $scope.display =0;

        funcao = 2;
        jaPressioneIgual = false;
        console.log(funcao);
    }
    
    $scope.multiplica= function(){
        valor1 = $scope.display;
        $scope.display =0;

        funcao = 3;
        jaPressioneIgual = false;
        console.log(funcao);
    }

    $scope.divisao= function(){
        valor1 = $scope.display;
        $scope.display =0;

        funcao = 4;
        jaPressioneIgual = false;
        console.log(funcao);
    }

    $scope.inicio=function(){
       // return $scope.display = 0;
       window.location.reload();
    }

    $scope.igual = function(){
        if(!jaPressioneIgual){
            valor2 = $scope.display;
            $scope.display = valor1;        

            if(funcao == 1){                
                $scope.display = $scope.display + valor2;
                jaPressioneIgual = true;
            }

            if (funcao==2){
                $scope.display = $scope.display - valor2;
                jaPressioneIgual = true;
             }

            if (funcao==3){
                $scope.display = $scope.display * valor2;
                jaPressioneIgual = true;
             }
            if (funcao==4){
                $scope.display = $scope.display / valor2;
                jaPressioneIgual = true;
             }
        }

            else{

            if(funcao == 1){
                console.log(valor2)
                $scope.display = $scope.display + valor2;
            }

            if (funcao==2){
                $scope.display = $scope.display - valor2;
             }

            if (funcao==3){
                $scope.display = $scope.display * valor2;   
             }

            if (funcao==4){
                $scope.display = $scope.display / valor2;                
                memoria =1;
             }
        }

    }





    





/*
    $scope.acc=function(x){
    	if(flag){
    		$scope.display = 0;
    		flag = false;
    	}
    	$scope.display = $scope.diaplay * 10 + x;
    }
    $scope.resultado = function(){
    	$scope.display = operacao(memoria,$scope.display);
        }
        $scope.add=function(){
        	memoria=$scope.display;
        	$scope.display = 0;
        	operacao = function(x,y){
        		return x+y;
        	};
        }
        */
  });
