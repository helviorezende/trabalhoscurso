'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:Prova1Ctrl
 * @description
 * # Prova1Ctrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('Prova1Ctrl', function ($scope) {
   
$scope.votosAlexandre=0;
$scope.votosCida=0;
$scope.votosGilberto=0;
$scope.votosGilmar=0;
$scope.votosOdelmo=0;
$scope.total = 0;
$scope.mensagem = " ";
$scope.msgModal ="";
$scope.conta = 0;



$scope.alexandre = function(){
	$scope.votosAlexandre = $scope.votosAlexandre + 1;
	$scope.total = $scope.total + 1;
  console.log($scope.votosAlexandre)
}

$scope.cida = function(){
	$scope.votosCida = $scope.votosCida + 1;
	$scope.total = $scope.total + 1;
}
$scope.gilberto = function(){
	$scope.votosGilberto = $scope.votosGilberto + 1;
	$scope.total = $scope.total + 1;
}
$scope.gilmar = function(){
	$scope.votosGilmar = $scope.votosGilmar + 1;
	$scope.total = $scope.total + 1;
}
$scope.odelmo = function(){
	$scope.votosOdelmo = $scope.votosOdelmo + 1;
	$scope.total = $scope.total + 1;

}

$scope.finalizar = function(){



	document.getElementById("alexandre").disabled = true;
    document.getElementById("cida").disabled = true;
    document.getElementById("gilberto").disabled = true;
    document.getElementById("gilmar").disabled = true;
    document.getElementById("odelmo").disabled = true;

    document.getElementById("votosAlexandre").hidden = false;
    document.getElementById("votosCida").hidden = false;
    document.getElementById("votosGilberto").hidden = false;
    document.getElementById("votosGilmar").hidden = false;
    document.getElementById("votosOdelmo").hidden = false;

    $scope.votosAlexandre = ($scope.votosAlexandre /$scope.total) * 100;
    $scope.votosGilberto = ($scope.votosGilberto /$scope.total) * 100;
    $scope.votosGilmar = ($scope.votosGilmar /$scope.total) * 100;
    $scope.votosCida = ($scope.votosCida /$scope.total) * 100;
    $scope.votosOdelmo =($scope.votosOdelmo/ $scope.total) * 100;

      if ($scope.votosAlexandre == $scope.votosGilberto && $scope.votosGilberto ==  $scope.votosGilmar && $scope.votosGilmar ==   $scope.votosCida &&  $scope.votosCida >=  $scope.votosOdelmo) 
      {
        $scope.conta =0;
        $scope.mensagem =  $scope.mensagem + "  Não Houve ";
      
      }
      else
      {

      if ($scope.votosAlexandre >= $scope.votosGilberto && $scope.votosAlexandre>=  $scope.votosGilmar && $scope.votosAlexandre>=   $scope.votosCida &&  $scope.votosAlexandre >=  $scope.votosOdelmo) 
      {
        $scope.conta =$scope.conta +1;
       $scope.mensagem =  $scope.mensagem +"   ALEXANDRE";
       
      }
      if ($scope.votosGilberto >= $scope.votosAlexandre && $scope.votosGilberto>=  $scope.votosGilmar && $scope.votosGilberto>=   $scope.votosCida &&  $scope.votosGilberto >=  $scope.votosOdelmo) 
      {
        $scope.conta =$scope.conta +1;
        $scope.mensagem =  $scope.mensagem  + "   GILBERTO";
      }
      if ($scope.votosGilmar >= $scope.votosAlexandre &&  $scope.votosGilmar >=  $scope.votosGilberto && $scope.votosGilmar >=   $scope.votosCida &&  $scope.votosGilmar >=  $scope.votosOdelmo) 
      {
        
        $scope.conta =$scope.conta +1;
        $scope.mensagem =  $scope.mensagem + "   GILMAR";
      }
      if ($scope.votosCida >= $scope.votosAlexandre &&  $scope.votosCida >=  $scope.votosGilberto && $scope.votosCida >=   $scope.votosGilmar &&  $scope.votosCida >=  $scope.votosOdelmo) 
      {  
        
        $scope.conta =$scope.conta +1;
        $scope.mensagem =  $scope.mensagem + "   CIDA";
        
      }
      if ($scope.votosOdelmo >= $scope.votosAlexandre &&  $scope.votosOdelmo >=  $scope.votosGilberto && $scope.votosOdelmo >=   $scope.votosGilmar &&  $scope.votosOdelmo >=  $scope.votosCida) 
      {
        $scope.conta =$scope.conta +1;
        $scope.mensagem =  $scope.mensagem + "  ODELMO" ;
      }
      else
      {


      }

      

      
        $scope.msgModal = $scope.mensagem + "   mais votado ";
        $('#options').modal('show');

        
  }
	
		}


    


  });
