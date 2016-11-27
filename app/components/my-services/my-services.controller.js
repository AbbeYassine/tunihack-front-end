/**
 * Created by Abbes on 27/11/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("MyServicesController", MyServicesController);

MyServicesController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service", "User", "$state"];
function MyServicesController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service, User, $state) {

    User.myServices({}).$promise.then(function (data) {
        $scope.services = data;
    });

    $scope.publish = function (serviceId) {
        $location.url("/combine-service/publier?id=" + serviceId);
    }
}
