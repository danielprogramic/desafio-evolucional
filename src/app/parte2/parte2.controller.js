angular.module('parte2.controllers.Parte2Ctrl', [])
  .controller('Parte2Ctrl', function(Parte1) {
    var vm = this;


    var vm = this;
    vm.searchClasses;
    vm.searchDegrees;

    vm.clearSearchClasses = function() {
      vm.searchClasses = '';
    };

    vm.selectedItens = {
      degrees: null,
      classes: null
    };

    Parte1
      .getDegrees()
      .then(function(result) {
        vm.getItensDegrees = result;
      });

    Parte1
      .getClasses()
      .then(function(result) {
        vm.getItensClasses = result;
      });


  });