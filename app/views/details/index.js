'use strict';

angular.module('myApp.views.details', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details/:guid', {
            templateUrl: 'views/details/index.html',
            controller: 'ViewDetailsCtrl'
        });
    }])

    .controller('ViewDetailsCtrl', ['$scope', '$location', '$routeParams', '$q', 'services.goals', 'services.blueprints', function($scope, $location, $routeParams, $q, goals, blueprints) {

        $scope.dashboard = dashboard;

        return $q
            .all([
                blueprints.fetch(),
                goals.fetch()
            ])
            .then(function(results) {
                var blueprints = results[0].program_blueprints;
                var guid = $routeParams.guid;
                $scope.guid = guid;
                // get the blueprint
                $scope.blueprint = blueprints.find(function (v) {
                    return v.guid === guid;
                });
                // get the goals
                $scope.blueprint.goals = results[1].goals.filter(function (goal) {
                    return goal.program_blueprint_id === $scope.blueprint.guid;
                });
                // sum the incentive_values
                $scope.blueprint.incentive_value = $scope.blueprint.goals.reduce(function(e,v){
                    e += !isNaN(v.incentive_value) && v.incentive_value || 0;
                    return e;
                },0);
                console.log('$scope.blueprint', $scope.blueprint);
            });

        function dashboard () {
            $location.url('/dashboard');
        }

    }]);