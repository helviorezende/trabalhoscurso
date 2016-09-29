'use strict';

describe('Controller: Prova1Ctrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var Prova1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Prova1Ctrl = $controller('Prova1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Prova1Ctrl.awesomeThings.length).toBe(3);
  });
});
