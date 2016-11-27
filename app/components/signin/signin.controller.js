'use strict';
angular
  .module("serviceLik")
  .controller("SignInController", SignInController);

SignInController.$inject = ["$rootScope", "$scope", "$location", "User", "$state"];
function SignInController($rootScope, $scope, $location, User, $state) {
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
      if (User.isAuthenticated()) {
        $state.go("home");
      }
    });
    console.log($scope.user);
  }


}
