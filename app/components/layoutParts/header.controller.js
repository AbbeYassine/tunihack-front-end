/**
 * Created by Abbes on 26/11/2016.
 */
angular
  .module("serviceLik")
  .controller("HeaderController", HeaderController);

HeaderController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location"];
function HeaderController($rootScope, $scope, uiGmapGoogleMapApi, $location) {

  $scope.goSearch = function (name) {
    $location.url("/result-search?type=name&&name=" + name);
  }
}
