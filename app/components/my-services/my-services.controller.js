/**
 * Created by Abbes on 27/11/2016.
 */
'use strict';
angular
  .module("serviceLik")
  .controller("MyServicesController", MyServicesController);

MyServicesController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service", "User"];
function MyServicesController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service, User) {

  User.myServices({}).$promise.then(function (data) {
    $scope.services = data;
  });

  $scope.publish = function (serviceId) {
    Service.publish({status: true}).$promise.then(function (data) {

    });
  }
}
