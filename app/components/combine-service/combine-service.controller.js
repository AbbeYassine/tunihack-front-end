/**
 * Created by Abbes on 26/11/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("CombineServiceController", CombineServiceController);

CombineServiceController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service", "Category"];
function CombineServiceController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service, Category) {

    $scope.categories = [];
    Category.find({}).$promise.then(function (data) {
        console.log(data);
        $scope.categories = data;
    });
    /*Service.find({}).$promise.then(function (data) {
     $scope.services = data;
     console.log(data);
     });*/

    $scope.services = [{
        name: "service1",
        description: "service1",
        price: 3000,
        selected: false
    }, {
        name: "service2",
        description: "service1",
        price: 2000,
        selected: false
    }, {
        name: "service3",
        description: "service1",
        price: 1500, selected: false
    }];
    $scope.price = 0;
    $scope.selectItem = function (index) {
        $scope.services[index].selected = true;
        $scope.price += $scope.services[index].price;
    };
    $scope.diselectItem = function (index) {
        $scope.services[index].selected = false;
        $scope.price -= $scope.services[index].price;
    };

    $scope.addService = function () {
        Service.prepareService({
            name: $scope.s.name,
            description: $scope.s.description,
            categoriesIds: []
        })
    };

}
