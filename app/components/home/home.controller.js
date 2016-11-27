/**
 * Created by Abbes on 29/08/2016.
 */
'use strict';
angular
  .module("serviceLik")
  .controller("HomeController", HomeController);

HomeController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service"];
function HomeController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service) {

  Service.popular({}).$promise.then(function (data) {
    $scope.popular_services = data;
  });
  Service.recent({}).$promise.then(function (data) {
    $scope.recent_services = data;
  });
  Service.recent({}).$promise.then(function (data) {
    $scope.nearby_services = data;
  });
  Service.recent({}).$promise.then(function (data) {
    $scope.recommended_services = data;
  });

  Service.recent({}).$promise.then(function (data) {
    $scope.recommended_services = data;
  });

  $scope.goSearch = function () {
    $location.url("/result-search");
  };


  $scope.take = function (serviceId) {
    Service.uservices({}).$promise.then(function (data) {

    });
  }

}
