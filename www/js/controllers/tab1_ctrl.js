angular.module('sampleApp.controllers')
.controller('Tab1Ctrl', ['$scope', 'SharedData',
  function($scope, SharedData) {
    $scope.shared = SharedData;
  }
]);
