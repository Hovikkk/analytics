'use strict';



angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/signIn.html',
        controller: 'SignInCtrl',
        controllerAs: 'signIn'
      })
      .when('/passRequest', {
        templateUrl: 'views/passRequest.html',
        controller: 'PassRequestCtrl',
        controllerAs: 'passRequest'
      })
        .when('/analytics', {
          templateUrl: 'views/analytics.html',
          controller: 'AnalyticsCtrl',
          controllerAs: 'analytics'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
