'use strict';

describe('Directive: tabletemplate', function () {

  // load the directive's module
  beforeEach(module('sdadminConsoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tabletemplate></tabletemplate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tabletemplate directive');
  }));
});
