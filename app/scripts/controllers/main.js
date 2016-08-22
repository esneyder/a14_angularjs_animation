'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope) {
    activeMenu('main');

    $scope.curso='Desarrollo de Aplicaciones Web con AngularJS - Animacion';
    $scope.autor = "Christian Portilla Pauca";

    // secuencia animada con animate css

    $('.autor').addClass('bounce');
    $('.autor').addClass('animated');

    setTimeout(
        function(){
          $('.autor').addClass('swirl');
        },500
    );

    setTimeout(
        function(){
          $('.autor').removeClass('bounce');
          $('.autor').addClass('rotateIn');
          $('.autor').addClass('fadeIn');
        },1000
    );

    $('.curso').addClass('rotateOut');
    $('.curso').addClass('animated');

    setTimeout(
        function(){
          $('.curso').removeClass('rotateOut');
          $('.curso').addClass('rotateIn');
          $('.curso').addClass('fadeIn');
        },1000
    );

  });
