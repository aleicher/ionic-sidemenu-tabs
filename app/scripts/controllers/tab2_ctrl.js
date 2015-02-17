angular.module('sampleApp.controllers')
.controller('Tab2Ctrl', ['$scope', 'SharedData',
  function($scope, SharedData) {
    $scope.shared = SharedData;
  }
]);
