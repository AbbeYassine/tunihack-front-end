'use strict';
angular
  .module("serviceLik")
  .controller("SignInController", SignInController);

SignInController.$inject = ["$rootScope", "$scope", "$location", "User"];
function SignInController($rootScope, $scope, $location, User) {
  //console.log(User.getCurrentId());
  $scope.user = {};
  $scope.submit = function () {
    User.login({
      include: 'user',
      rememberMe: $scope.user.remember_me
    }, {
      'username': $scope.user.username,
      'password': $scope.user.password
    }).$promise.then(function (data) {
      console.log(data);
    });
    console.log($scope.user);
  }


}
