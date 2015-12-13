'use strict';

describe('Controller: TablesCtrl', function () {

  // load the controller's module
  beforeEach(module('sdadminConsoleApp'));

  var TablesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesCtrl = $controller('TablesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TablesCtrl.awesomeThings.length).toBe(3);
  });
});
