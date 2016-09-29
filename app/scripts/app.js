'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bootstrap', {
        templateUrl: 'views/bootstrap.html',
        controller: 'BootstrapCtrl',
        controllerAs: 'bootstrap'
      })
      .when('/calculadora', {
        templateUrl: 'views/calculadora.html',
        controller: 'CalculadoraCtrl',
        controllerAs: 'calculadora'
      })
      .when('/jogo', {
        templateUrl: 'views/jogo.html',
        controller: 'JogoCtrl',
        controllerAs: 'jogo'
      })
      .when('/dado', {
        templateUrl: 'views/dado.html',
        controller: 'DadoCtrl',
        controllerAs: 'dado'
      })
      .when('/porta', {
        templateUrl: 'views/porta.html',
        controller: 'PortaCtrl',
        controllerAs: 'porta'
      })
      .when('/Revisao', {
        templateUrl: 'views/revisao.html',
        controller: 'RevisaoCtrl',
        controllerAs: 'Revisao'
      })
      .when('/prova1', {
        templateUrl: 'views/prova1.html',
        controller: 'Prova1Ctrl',
        controllerAs: 'prova1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
