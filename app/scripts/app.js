'use strict';

/**
 * @ngdoc overview
 * @name itp301FinalProjectApp
 * @description
 * # itp301FinalProjectApp
 *
 * Main module of the application.
 */
var App =angular
  .module('itp301FinalProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]);


App.controller('ArtistListCtrl', function ($scope) {
  $scope.artists = [
    {'name': 'Justin Timberlake',
    'url':'images/justin_timberlake_icon.jpg'},
    {'name': 'Taylor Swift',
	'url':'images/taylor_swift_icon.jpg'}
  ];

});