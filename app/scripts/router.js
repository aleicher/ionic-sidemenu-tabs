angular.module('sampleApp.router', [])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/tab1');

    $stateProvider.state('app', {
      url: '/app',
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl',
      abstract: true
    })
    .state('app.tab1', {
      url: '/tab1',
      views: {
        'tab1': {
          templateUrl: 'templates/tab1.html',
          controller: 'Tab1Ctrl'
        }
      }
    })
    .state('app.tab2', {
      url: '/tab2',
      views: {
        'tab2': {
          templateUrl: 'templates/tab2.html',
          controller: 'Tab2Ctrl'
        }
      }
    });
  }
]);
