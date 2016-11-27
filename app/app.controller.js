/**
 * Created by Abbes on 17/08/2016.
 */
angular
  .module("serviceLik")
  .controller("AppController", AppController);


AppController.$inject = ['$scope', 'BASE_URL', "obj_admin"];
function AppController($scope, BASE_URL, obj_admin) {
  $scope.BASE_URL = BASE_URL;
  $scope.obj_admin = obj_admin;

}
