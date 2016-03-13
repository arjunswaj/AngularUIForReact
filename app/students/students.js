'use strict';

angular.module('myApp.students', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/student/all', {
      templateUrl: 'students/students.html',
      controller: 'StudentsCtrl'
    });
  }])

  .controller('StudentsCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://localhost:8080/api/student/all').success(function (data) {
      $scope.students = data;
    });

  }]);