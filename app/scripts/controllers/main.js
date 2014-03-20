'use strict';

angular.module('mmediaApp')
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.jsonp('http://api.dribbble.com/players/brdrck?callback=JSON_CALLBACK')
            .success(function (res) {
                $scope.dribbbleProfile = res;
            })
            .error(function () {
                $scope.dribbbleError = true;
            });
        $http.jsonp('http://api.dribbble.com/players/brdrck/shots?callback=JSON_CALLBACK')
            .success(function (res) {
                $scope.dribbbleShots = res;
            })
            .error(function () {
                $scope.dribbbleError = true;
            });

        $http.jsonp('https://api.github.com/users/moonsspoon/repos?callback=JSON_CALLBACK')
            .success(function (res) {
                $scope.githubRepos = res.data;
            })
            .error(function () {
                $scope.githubError = true;
            });
    }]);