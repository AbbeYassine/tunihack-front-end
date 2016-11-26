'use strict';
angular
  .module("serviceLik")
  .controller("SignUpController", SignUpController);

SignUpController.$inject = ["$rootScope", "$scope", "$location", "Service"];
function SignUpController($rootScope, $scope, $location, Service) {

  $scope.user = {};
  $scope.submit = function () {
    console.log($scope.user)
  }


}
