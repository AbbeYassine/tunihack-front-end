'use strict';
angular
  .module("serviceLik")
  .controller("CreateServiceController", CreateServiceController);

CreateServiceController.$inject = ["$rootScope", "$scope", "$location"];
function CreateServiceController($rootScope, $scope, $location, $q, $timeout) {

  $scope.step1 = function () {
    $scope.selected = 1;
    $scope.step2.disabled = false;
    $scope.step1.completed = true;
  };
  $scope.step2 = function () {
    $scope.selected = 2;
    $scope.step2.completed = true;
  };
  $scope.step3 = function () {
    $scope.selected = 3;
    $scope.step3.completed = true;
  };
  $scope.step4 = function () {
    $scope.selected = 4;
    $scope.step4.completed = true;
  };

  $scope.user = {};
  $scope.submit = function () {
    console.log($scope.user)
  }


}
