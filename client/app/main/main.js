'use strict';

var app = angular.module('tictacwhoaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'app/main/main.html',
        templateUrl: 'app/main/game.html',
        controller: 'MainCtrl'

       // .when('game.html', {
       //  // templateUrl: 'app/main/main.html',
       //  templateUrl: 'app/main/game.html',
       //  // controller: 'MainCtrl' 
      });
  });

  var uniqueNum = Math.floor(Math.random() * 100000000);
  var uniqueLink = 'http://###/game/' + uniqueNum;

  function copyToClipboard() {
  window.prompt("Copy to clipboard: Cmd+C, Enter", uniqueLink);
}

app.controller('LinkController', ['$scope',
	function($scope) {

	}]);