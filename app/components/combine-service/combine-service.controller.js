/**
 * Created by Abbes on 26/11/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("CombineServiceController", CombineServiceController);

CombineServiceController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi", "$location", "Service", "Category", "Country"];
function CombineServiceController($rootScope, $scope, uiGmapGoogleMapApi, $location, Service, Category, Country) {

    $scope.categories = [];
    Category.find({}).$promise.then(function (data) {
        console.log(data);
        $scope.categories = data;
    });
    Service.find({}).$promise.then(function (data) {
        $scope.services = data;
        console.log(data);
    });

    $scope.s = {};
    $scope.nextStep = function () {
        Service.prepareService({
            name: $scope.s.name,
            description: $scope.s.description,
            categoriesIds: [$scope.s.category]
        }).$promise.then(function (data) {
            $scope.id = data.id;
        });
        $location.url("/combine-service/submit");
    };
    $scope.price = 0;
    $scope.selectItem = function (index) {
        Service.useServiceCombined({
            serviceId: $scope.services[index].id,
            combinedServiceId: $scope.id
        }).$promise.then(function (data) {
            console.log(data);
        });
        $scope.services[index].selected = true;
        $scope.price += $scope.services[index].price;
    };
    $scope.diselectItem = function (index) {
        $scope.services[index].selected = false;
        $scope.price -= $scope.services[index].price;
    };

    $scope.publier = function () {
        $location.url("/combine-service/publier");
    };


    Country.find({
        filter: {
            include: ["cities"]
        }
    }).$promise.then(function (data) {
        $scope.countries = data
    });

    $scope.changeCountry = function (index) {
        console.log(index);
        $scope.cities = $scope.countries[$scope.service.country].cities;

    };


}
