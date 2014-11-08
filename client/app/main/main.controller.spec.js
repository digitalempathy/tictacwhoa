'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tictacwhoaApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

describe('uniqueNum', function () {

  it('should return a random number', function () {
    expect(typeof(uniqueNum)).toBe('number');
  });
});
});
