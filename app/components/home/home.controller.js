/**
 * Created by Abbes on 29/08/2016.
 */
'use strict';
angular
  .module("serviceLik")
  .controller("HomeController", HomeController);

HomeController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service", "Category", "Country"];
function HomeController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service, Category, Country) {

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
  $scope.goSearch = function (search) {
    console.log(search);
    $location.url("/result-search");
  };

  $scope.take = function (serviceId) {
    Service.useService({serviceId: serviceId}).$promise.then(function (data) {

    });
  };

  Category.find({}).$promise.then(function (data) {
    $scope.categories = data;
  });

  Country.find({
    filter: {
      include: ["cities"]
    }
  }).$promise.then(function (data) {
    $scope.countries = data
  });
  $scope.changeCountry = function (index) {
    console.log(index);
    $scope.cities = $scope.countries[$scope.s.country].cities;
  };
}
