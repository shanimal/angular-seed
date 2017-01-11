'use strict';

angular.module('myApp.views.dashboard', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'views/dashboard/index.html',
            controller: 'ViewDashboardCtrl'
        });
    }])
    .controller('ViewDashboardCtrl', ['$scope', '$location', 'services.blueprints', function($scope, $location, blueprints) {

        $scope.details = details;

        blueprints.fetch()
            .then(function (response) {
                $scope.blueprints = response.program_blueprints;
            });

        function details(blueprint) {
            $location.url('/details/' + blueprint.guid);
        };

    }]);