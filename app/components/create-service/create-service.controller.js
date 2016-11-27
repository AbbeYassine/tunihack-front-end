'use strict';
angular
    .module("serviceLik")
    .controller("CreateServiceController", CreateServiceController);

CreateServiceController.$inject = ["$rootScope", "$scope", "$location", "$q", "$timeout", "Upload", "Category", "Country"];
function CreateServiceController($rootScope, $scope, $location, $q, $timeout, Upload, Category, Country) {


    Category.find({}).$promise.then(function (data) {
        $scope.categories = data;
    });
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
    $scope.step4 = function (file) {
        console.log($scope.service.category);
        file.upload = Upload.upload({
            url: 'http://10.128.1.242:3000/api/services/create-service',
            data: {
                file: file,
                "name": $scope.service.title,
                "description": $scope.service.description,
                "latitude": $scope.service.latitude,
                "longitude": $scope.service.longitude,
                "price": $scope.service.price,
                "startDate": $scope.service.publish_date,
                "endDate": $scope.service.expiration_date,
                "categories": $scope.service.category,
                "cityId": $scope.service.city
            },
        });

        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
                console.log(file.result);
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
        $scope.selected = 4;
        $scope.step4.completed = true;
    };

    $scope.service = {};
    $scope.submit = function () {
        console.log($scope.service)
    }

    $scope.step3 = function () {
        $scope.selected = 3;
        $scope.step4.completed = true;

    }


}
