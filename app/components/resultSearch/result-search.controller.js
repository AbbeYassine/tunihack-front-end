/**
 * Created by Abbes on 26/11/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("ResultSearchController", ResultSearchController);

ResultSearchController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service"];
function ResultSearchController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service) {


    $scope.search = function (params) {
        Service.find({$text: {$search: params.name}}).$promise.then(function (data) {
            console.log(data);
        });
    };
    
    $scope.search($location.search());

}