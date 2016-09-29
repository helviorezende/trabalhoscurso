'use strict';

describe('Controller: JogoCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var JogoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JogoCtrl = $controller('JogoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JogoCtrl.awesomeThings.length).toBe(3);
  });
});
