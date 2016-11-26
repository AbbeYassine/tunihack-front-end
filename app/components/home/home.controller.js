/**
 * Created by Abbes on 29/08/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("HomeController", HomeController);

HomeController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service"];
function HomeController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service) {
    Service.find({}).$promise.then(function (data) {
        console.log(data);
    })


}