'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('AboutCtrl', function ($scope) {
    activeMenu('about');

    $scope.autor={
        'nombres':'Christian',
        'apellidos':'Portilla Pauca',
        'email':'xhrist14n@gmail.com',
        'web':'http://www.christianportilla.com',
        'blog':'http://javascriptx.wordpress.com'
    };
    $scope.curso='Desarrollo de Aplicaciones Web basadas en AngularJS';
    $scope.tema='Animación en AngularJS';

    var id = ".tema";
    $(id).addClass('bounce');
    $(id).addClass('animated');

    setTimeout(
        function(){
          $(id).addClass('swirl');
        },500
    );

    setTimeout(
        function(){
          $(id).removeClass('bounce');
          $(id).addClass('rotateIn');
          $(id).addClass('fadeIn');
        },1000
    );

    var divs = ".autor";
    $(divs).addClass('bounce');
    $(divs).addClass('animated');

    setTimeout(
        function(){
          $(divs).removeClass('bounce');
          $(divs).addClass('swirl');
        },500
    );

    setTimeout(
        function(){
          $(divs).removeClass('swirl');
          $(divs).addClass('bounce');
        },1000
    );

    setTimeout(
        function(){
          $(divs).removeClass('bounce');
          $(divs).addClass('rotateIn');
          $(divs).addClass('fadeIn');
        },1500
    );

  });
