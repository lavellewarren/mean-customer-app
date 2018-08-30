angular.module("appRoutes", ["ngRoute"])

.config(($routeProvider, $locationProvider) => {

    $routeProvider

    .when("/", {
        templateUrl: "app/views/pages/home.html"
    })
    .when("/about", {
        templateUrl: "app/views/pages/about.html",
        controller: "registerCustomer",
        controllerAs: "register"
    })
    .when("/register", {
        templateUrl: "app/views/pages/users/register.html",
        controller: "registerCustomer",
        controllerAs: "register"
    })
    .otherwise({ redirectTo: "/" });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    console.log("HIT MAIN ROUTE.JS CONFIGURATION FILE");
});