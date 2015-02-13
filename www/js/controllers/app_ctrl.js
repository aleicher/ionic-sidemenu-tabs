angular.module('sampleApp.controllers')
.controller('AppCtrl', ['$scope', '$ionicSideMenuDelegate', 'SharedData',
  function($scope, $ionicSideMenuDelegate, SharedData) {
    $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.menuOptions = ['Option 1', 'Option 2'];

    $scope.selectOption = function(option) {
      SharedData.data = option;
    };
  }
]);
