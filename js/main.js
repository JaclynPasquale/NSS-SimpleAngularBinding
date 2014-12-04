;
(function() {
  'use strict';

  angular.module('myApp', [])
    .controller('SimpleController', function() {
      //$scope.name = "Scott"; using this is the preferred method
      var vm = this;
      vm.name = "Scott";
      vm.friends = ['Ke$ha', 'LadyGaga', 'Shaniqua', 'Kimbra',
        'Kashira', 'D\'andre'
      ];
      //$scope.friends = ['Ke$ha', 'LadyGaga', 'Shaniqua', 'Kimbra',
      //  'Kashira', 'D\'andre'];
    });


}());
