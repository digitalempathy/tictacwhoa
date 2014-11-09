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
});

describe('Getting the unique link', function() {
  
  describe('The uniqueNum variable', function () {

    it('should return a random number', function () {
      expect(typeof(uniqueNum)).toBe('number');
    });
  });    

  describe('The uniqueLink variable', function(){

    it('should match the current URL', function(){
      expect(uniqueLink).toMatch(document.URL)
    });
  });
});

