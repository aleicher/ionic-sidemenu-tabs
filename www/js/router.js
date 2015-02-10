angular.module('sampleApp.router', [])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/main/tab1');

    $stateProvider.state('app', {
      url: '/app',
      templateUrl: 'templates/sidemenu.html',
      controller: 'SideMenuCtrl',
      abstract: true
    })
    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        }
      },
      abstract: true
    })
    .state('app.main.tab1', {
      url: '/tab1',
      views: {
        'tab1': {
          templateUrl: 'templates/tab1.html',
          controller: 'Tab1Ctrl'
        }
      }
    })
    .state('app.main.tab2', {
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
