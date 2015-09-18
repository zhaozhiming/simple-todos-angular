Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  angular.module('simple-todos',['angular-meteor']);

  angular.module('simple-todos')
    .controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
      $scope.tasks = $meteor.collection(Tasks);
  }]);
}

