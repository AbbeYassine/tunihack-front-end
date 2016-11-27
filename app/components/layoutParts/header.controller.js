/**
 * Created by Abbes on 26/11/2016.
 */
angular
    .module("serviceLik")
    .controller("HeaderController", HeaderController);

HeaderController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location"];
function HeaderController($rootScope, $scope, uiGmapGoogleMapApi, $location) {

    $scope.goSearch = function () {
        $location.url("/result-search");
    }
}