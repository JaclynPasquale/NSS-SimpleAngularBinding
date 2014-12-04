;
(function() {
  'use strict';

  angular.module('todoApp', [])
    .controller('TodoController', function() {
      //$scope.name = "Scott"; using this is the preferred method
      var vm = this;
      vm.tasks = [{
        name: 'Learn Angular',
        desc: 'If I could learn angular that would be great',
        due: 'today'
      }, {
        name: 'Return stuff',
        desc: 'get out of the house',
        due: 'this weekend'
      }, {
        name: 'get a job',
        desc: 'Profit!',
        due: 'someday'
      }, ];
      vm.addNewTask = function() {
        vm.tasks.push(vm.newTask);
      };
    });


}());
