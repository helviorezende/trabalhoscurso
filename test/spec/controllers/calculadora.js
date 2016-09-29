'use strict';

describe('Controller: CalculadoraCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var CalculadoraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculadoraCtrl = $controller('CalculadoraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalculadoraCtrl.awesomeThings.length).toBe(3);
  });
});
