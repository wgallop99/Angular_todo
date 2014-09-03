function MainController($scope) {
  $scope.list = [];
  $scope.edit = false;

  $scope.addTask = function (task) {
    $scope.list.push({thing: task.thing, completed: false});
    $scope.newTask = {};

    console.log($scope.list);
  }

  $scope.delete = function (task) {
    $scope.list.splice($scope.list.indexOf(task), 1);
  }

  $scope.total = function () {
    var count = 0;

    angular.forEach($scope.list, function(task) {
      count += task.completed === false;
    });

    return count;
  }

  $scope.clear = function() {
    var oldtodos = $scope.list;
    $scope.list = [];

    angular.forEach(oldtodos, function (task) {

      if(task.completed === false) {
        $scope.list.push(task);
      }
    });
  }
}
