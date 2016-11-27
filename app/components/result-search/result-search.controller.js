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
    console.log(JSON.stringify(params));
    if (params.type === 'category') {
      Service.find({$text: {$search: params.category}}).$promise.then(function (data) {
        console.log(data);
      });
    }

    if (params.type === 'name') {
      Service.find({$text: {$search: params.name}}).$promise.then(function (data) {
        console.log(data);
      });
    }

    if (params.type === 'country') {
      Service.find({$text: {$search: params.name}}).$promise.then(function (data) {
        console.log(data);
      });
    }
  };

  $scope.search($location.search());

}
