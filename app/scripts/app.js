'use strict';

/**
 * @ngdoc overview
 * @name teesApp
 * @description
 * # teesApp
 *
 * Main module of the application.
 */
angular.module('teesApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular.module('teesApp').run(function ($http) {
//   $http.get('http://dummy.restapiexample.com/api/v1/employees').then(function (result) {
//     console.log('result api', result);
//   });
//
//   // $http({
//   //   url: 'https://api.twitter.com/1.1/search/tweets.json',
//   //   method: "GET",
//   //   params: {q: '%23games'},
//   //   body:''
//   // });
//
//   // $http.defaults.headers.common.Authorization = 'Bearer AAAAAAAAAAAAAAAAAAAAAHjWuwAAAAAAlyaKAHVwjPlYHYilPakzI5GV7W4%3DLjNxFWnZSRr4d3ODK955wKCMNtNsiRoqnNiSM9BGm1N0E6DF9D';
//   // $http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23games').then(function (result) {
//   //   console.log('result api', result);
//   // });
// });
