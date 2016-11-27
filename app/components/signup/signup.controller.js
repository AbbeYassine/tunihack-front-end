'use strict';
angular
  .module("serviceLik")
  .controller("SignUpController", SignUpController);

SignUpController.$inject = ["$rootScope", "$scope", "$location", "User"];
function SignUpController($rootScope, $scope, $location, User) {

  $scope.user = {};
  $scope.submit = function () {
    User.create({
      include: 'user'
    }, {
      "name": $scope.user.name,
      "isAdmin": false,
      "phone": $scope.user.phone,
      "username": $scope.user.username,
      "password": $scope.user.password,
      "email": $scope.user.email
    }).$promise.then(function (data) {
      console.log(data);
    });
    console.log($scope.user)
  }


}
