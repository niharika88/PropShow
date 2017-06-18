'use strict';

angular.module('myApp.adds', ['ngRoute'])


// Declared route 
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when('/adds', {
        templateUrl: 'adds/adds.html',
        controller: 'AddsCtrl'
    });
}])

// Advertisement controller
.controller('AddsCtrl', ['$scope', '$http', function($scope, $http, $window) {

    $scope.addData;

    $scope.myFunc = function() {

        $http.defaults.headers.post["'Access-Control-Allow-Origin"] = "*";
        // Delete the Requested With Header
        delete $http.defaults.headers.common['X-Requested-With'];

        $http.get("https://api.mcmakler.de/v1/advertisements")
            .success(function(data) {
                $scope.addData = data;
            });
    };

}])

.filter('toArray', function() {
    return function(obj) {
        const result = [];
        angular.forEach(obj, function(val) {
            result.push(val);
        });
        return result;
    }
});