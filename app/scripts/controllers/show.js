'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('ShowCtrl', function ($scope) {
    activeMenu('show');
    $scope.check=true;

  });
