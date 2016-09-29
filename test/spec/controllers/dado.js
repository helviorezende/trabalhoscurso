'use strict';

describe('Controller: DadoCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var DadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DadoCtrl = $controller('DadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DadoCtrl.awesomeThings.length).toBe(3);
  });
});
