'use strict';

describe('myApp.views.dashboard module', function() {

  var $controller,
      $location,
      $scope,
      $q,
      blueprints,
      controller,
      deferredBlueprints,
      deferredGoals,
      goals;

  beforeEach(function() {
    module('myApp');
    inject(['$controller', '$location', '$q', 'services.blueprints', 'services.goals', function($ctrl, $loc, q, bp, gols){
      $controller = $ctrl;
      $location = $loc;
      $scope = {};
      $q = q;
      blueprints = bp;
      goals = gols;

      //// blueprint
      deferredBlueprints = $q.defer();
      deferredGoals = $q.defer();
      spyOn(blueprints, 'fetch').and.returnValue(deferredBlueprints.promise);
      spyOn(goals, 'fetch').and.returnValue(deferredGoals.promise);
    }]);
  });
  describe('routes', function() {
    it('redirects to details page', function() {
      inject(function($route) {
        expect($route.routes['/dashboard'].controller).toBe('ViewDashboardCtrl');
        expect($route.routes['/dashboard/'].redirectTo).toBe('/dashboard');
        expect($route.routes['/dashboard'].templateUrl).toBe('views/dashboard/index.html');
        expect($route.routes['null'].redirectTo).toBe('/dashboard');
      });
    });
  });
  describe('ViewDashboardCtrl', function () {
    it('should init the controller', function () {
      controller = $controller('ViewDashboardCtrl', {$scope: $scope});
      expect(typeof $scope.details).toEqual('function');
      var guid = 'somebigfancyguid';
      $scope.details({guid:guid});
      expect($location.path()).toBe('/details/'+guid);
    });
  });
  describe('Instructions', function () {

    beforeEach(function () {
      controller = $controller('ViewDashboardCtrl', {$scope: $scope});
    });
    it('should use program_blueprints.json', function () {

      expect(typeof controller).toEqual('function');
      // why is this simple deferred promise not resolving?
      var deferred = $q.defer();
      //console.log('deferred', deferred)
      deferred.promise.then(function () {
        //console.log('SIMPLE PROMISE PASSED', arguments);
        // done()
      });
      deferred.resolve({foo: 'bar'});

      // when that one works this one will to
      blueprints.fetch().then(function () {
        //console.log('SPY PROMISE PASSED', arguments);
        //done();
      });
      deferredBlueprints.resolve({});
      deferredGoals.resolve({});

    });
    it('should have a grid (2 or 3 columns per row, preferably using flexbox)', function () {

    });
    it('should have a first column with program icons using the blueprint\'s icon_url as the image', function () {

    });
    it('should use the display_type as the unique identifier', function () {

    });
    it('should use the blueprint\'s title attribute to display a name underneath the icon.', function () {

    });
    it('should pay special attention to the display order, and display them in order.', function () {

    });
  });

});