'use strict';

angular.module('teesApp').run(function ($http) {
  $http.get('http://dummy.restapiexample.com/api/v1/employees').then(function (result) {
    console.log('result api', result);
  });
});
