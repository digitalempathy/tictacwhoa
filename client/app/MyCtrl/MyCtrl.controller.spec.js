'use strict';

describe('Controller: MyctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('tictacwhoaApp'));

  var MyctrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyctrlCtrl = $controller('MyctrlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
