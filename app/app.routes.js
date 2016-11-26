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

}