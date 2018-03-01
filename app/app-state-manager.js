"use strict";

(function () {

    angular.module('bankingApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("bbva", {
                url: "/bbva",
                templateUrl: "app/feature/bbva/bbva.html"
        })
        .state("google", {
                url: "/google",
                templateUrl: "app/feature/goolge/goolge.html"
        })

    });
}());
