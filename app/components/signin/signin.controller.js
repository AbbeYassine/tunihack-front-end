'use strict';
angular
  .module("serviceLik")
  .controller("SignInController", SignInController);

SignInController.$inject = ["$rootScope", "$scope", "$location", "Service"];
function SignInController($rootScope, $scope, $location, Service) {

  $scope.user = {};
  $scope.submit = function () {
    console.log($scope.user)
  }


}
