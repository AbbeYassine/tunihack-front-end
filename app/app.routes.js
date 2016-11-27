/**
 * Created by Abbes on 17/08/2016.
 */
angular
    .module("serviceLik")
    .config(config);

config.$inject = ['$urlRouterProvider', '$stateProvider', 'componentsUrl'];
function config($urlRouterProvider, $stateProvider, componentsUrl) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: componentsUrl + "/home/home.html",
            controller: "HomeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/home/home.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('registration', {
            url: "/registration",
            templateUrl: componentsUrl + "/registration/registration.html"
        })
        .state('registration.signup', {
            url: "/signup",
            templateUrl: componentsUrl + "/signup/signup.html",
            controller: "SignUpController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/signup/signup.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('registration.signin', {
            url: "/signin",
            templateUrl: componentsUrl + "/signin/signin.html",
            controller: "SignInController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/signin/signin.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('create-service', {
            url: "/create-service",
            templateUrl: componentsUrl + "/create-service/create-service.html",
            controller: "CreateServiceController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/create-service/create-service.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('result-search', {
            url: "/result-search",
            templateUrl: componentsUrl + "/resultSearch/result-search.html",
            controller: "ResultSearchController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/resultSearch/result-search.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('combine-service', {
            url: "/combine-service",
            templateUrl: componentsUrl + "/combine-service/combine-service.html",
            controller: "CombineServiceController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/combine-service/combine-service.controller.js'
                        ]
                    });
                }]
            }
        })
        .state('combine-service.register', {
            url: "/register",
            templateUrl: componentsUrl + "/combine-service/steps/register.html",

        })
        .state('combine-service.submit', {
            url: "/submit",
            templateUrl: componentsUrl + "/combine-service/steps/submit.html",

        })
        .state('my-services', {
            url: "/my-services",
            templateUrl: componentsUrl + "/my-services/my-services.html",
            controller: "MyServicesController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'serviceLik',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            componentsUrl + '/my-services/my-services.controller.js'
                        ]
                    });
                }]
            }

        })


}
