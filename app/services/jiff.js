// TODO: $cacheFactory $q
// TODO: store variable {headers : {'Content-Type' : 'application/json; charset=UTF-8'}}
angular.module('myApp')
    .factory('services.blueprints', ['$http', function($http) {
        return {
            fetch: function() {
                return $http.get(
                    '../data/program_blueprints.json',
                    {headers : {'Content-Type' : 'application/json; charset=UTF-8'}}
                ).then(function(response) {
                        console.log('RESPONSE', response);
                    return response.data;
                });
            }
        };
    }])
    .factory('services.goals', ['$http', function($http) {
        return {
            fetch: function() {
                return $http.get(
                    '../data/goals.json',
                    {headers : {'Content-Type' : 'application/json; charset=UTF-8'}}
                ).then(function(response) {
                    return response.data;
                });
            }
        };
    }]);