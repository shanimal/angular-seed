'use strict';

describe('myApp.views.details module', function() {

    var $controller;
    var $scope;
    var $location;
    var $window;
    var controller;

    beforeEach(function() {

        module('myApp');
        inject(['$controller', '$location', '$window', function(ctrl, loc, win){
            $controller = ctrl;
            $location = loc;
            $window = win;
            $scope = {};
        }]);
        $scope = {};
        controller = $controller('ViewDetailsCtrl', { $scope: $scope, $location: $location });
        controller.then(function () {});
    });
    describe('routes', function() {
        it('redirects to details page should be handled', function() {
            inject(function($route) {
                expect($route.routes['/details/:guid'].controller).toBe('ViewDetailsCtrl');
                expect($route.routes['/details/:guid'].templateUrl).toBe('views/details/index.html');
                expect($route.routes['/details/:guid/'].redirectTo).toBe('/details/:guid');
            });
        });
    });

    describe('ViewDetailsCtrl', function () {
        it('should init the controller', function () {
            expect(typeof $scope.dashboard).toEqual('function');
            $scope.dashboard();
            expect($location.path()).toBe('/dashboard');
        });
    });

    describe('Specs', function () {
        it('should be optimized for 360px x 640px, portrait mode.', function () {
            // TODO: set window size in Mac before running tests
            //expect($window.innerHeight).toEqual(640);
            //expect($window.innerWidth).toEqual(360);
        });
    });

    describe('THE MEAT', function () {
        describe('the details page', function () {
            it('should be visible when each icon when clicked', function () {

            });
            it('should show the program\'s icon if available', function () {

            });
            it('should show the program\'s title if available', function () {

            });
            it('should show the program\'s description if available', function () {

            });
            it('should be shown when an icon image is clicked', function () {

            });
            it('should use the program\'s "incentive_description" to tell us what we can earn and how', function () {

            });
            it('should assume there are no rewards / earnings if the "incentive_description" is null', function () {

            });
            it('should check for goals in the goals array of the blueprint, and match up GUID with the GUID in the goals.json. to find the "incentive_value".', function () {

            });
            it('should tally up the "incentive_value"s of all the goals if the program has multiple goals', function () {

            });
            it('should use the incentive_value of that goal if the program has one goal', function () {

            });
            it('should display the total incentive value in the details page', function () {

            });
            it('should also list the goals and their individual values', function () {

            });
            it('should have a back button to let the user go back to the dashboard to pick other programs.', function () {

            });
        });

    });

});