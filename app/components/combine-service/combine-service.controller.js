/**
 * Created by Abbes on 26/11/2016.
 */
'use strict';
angular
    .module("serviceLik")
    .controller("CombineServiceController", CombineServiceController);

CombineServiceController.$inject = ["$rootScope", "$scope", "uiGmapGoogleMapApi",
    "$location", "Service", "Category", "Country", "Upload", "$timeout"];
function CombineServiceController($rootScope, $scope, uiGmapGoogleMapApi,
                                  $location, Service, Category, Country, Upload, $timeout) {

    $scope.id = $location.search().id;
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
        $scope.cities = $scope.countries[$scope.s.country].cities;

    };
    $scope.publishService = function (file2) {
        console.log(file2);
        console.log($scope.service);
        console.log($scope.id);
        Upload.upload({
            url: 'http://10.128.1.242:3000/api/services/publish-service',
            data: {
                file: file2,
                "latitude": $scope.service.latitude,
                "longitude": $scope.service.longitude,
                "price": $scope.s.price,
                "startDate": (new Date($scope.s.startDate)).getTime(),
                "endDate": (new Date($scope.s.endDate)).getTime(),
                "cityId": $scope.s.city,
                "serviceId": $scope.id
            },
        });


    };
    $scope.service = {};
    $scope.service.latitude = 36.7994983;
    $scope.service.longitude = 10.1822465;

    $scope.marker = {
        id: 0,
        coords: {
            latitude: $scope.service.latitude,
            longitude: $scope.service.longitude
        },
        options: {draggable: true},
        events: {
            dragend: function (marker, eventName, args) {
                //$log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $scope.service.latitude = lat;
                $scope.service.longitude = lon;

                $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                };
            }
        }
    };
    $scope.map = {
        center: {latitude: $scope.service.latitude, longitude: $scope.service.longitude},
        zoom: 12,
        options: {
            scrollwheel: false
        }
    };


}
