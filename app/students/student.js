/**
 * Created by arjun on 13/03/16.
 */

angular.module('myApp.student', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/student/:name', {
      templateUrl: 'students/student.html',
      controller: 'StudentCtrl'
    });
  }])

  .controller('StudentCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('http://localhost:8080/api/student/' + $routeParams.name).success(function (data) {
      $scope.student = data;
    });

  }]);