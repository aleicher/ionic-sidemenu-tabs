angular.module('sampleApp.controllers')
.controller('SideMenuCtrl', ['$scope', '$ionicSideMenuDelegate',
  function($scope, $ionicSideMenuDelegate) {
    $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  }
]);
