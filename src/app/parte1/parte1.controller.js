angular
  .module('parte1.controllers.Parte1Ctrl', [])
  .controller('Parte1Ctrl', function(Parte1, $element, Utils, $mdDialog, $rootElement, $scope) {
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
      .loadStudents()
      .then(function(result) {
        Parte1.itemStudents = result;
        vm.students = Parte1.itemStudents;
      });
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
    vm.clearSearchDegrees = function() {
      vm.searchDegrees = '';
    };
    $scope.inputText = 'Modal';
    vm.openDialog = function() {
      $mdDialog.show({
        template: '<modal text="inputText"></modal>',
        parent: $rootElement,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true
      });
    };
    vm.save300students = function() {
      var carrega = [];
      for (var i = 0; i < 300; i++) {
        var degreeId = Math.floor((Math.random() * 13) + 1);
        var classId = Math.floor((Math.random() * 6) + 1);
        var keyGenerator = Utils.isGenerateHexString(6);
        carrega.push({
          "id": (Parte1.itemStudents.length + (i + 1)),
          "ra": keyGenerator,
          "name": "Nome do aluno " + (Parte1.itemStudents.length + (i + 1)),
          "degreeId": degreeId,
          "classId": classId
        });
      }
      Parte1
        .setStudents300(carrega)
        .then(function(result) {
          vm.students = result;
          vm.getSelectedText(vm.selectedItens.degrees, vm.selectedItens.classes);
        });
    };
    vm.getSelectedText = function(degrees, classes) {
      var dataFilterStudents = [];
      var obj = {};
      (degrees) ? obj["degreeId"] = [degrees.id]: dataFilterStudents;
      (classes) ? obj["classId"] = [classes.id]: dataFilterStudents;
      dataFilterStudents.push(obj);
      Parte1
        .getStudents(dataFilterStudents[0])
        .then(function(result) {
          vm.getItensStudents = result;
        });
    };
    $element
      .find('input')
      .on('keydown', function(ev) {
        ev.stopPropagation();
      });
  })
  .component('modal', {
    templateUrl: 'parte1/parte1.modal.view.html',
    bindings: {
      text: '<'
    },
    controller: function($scope, Parte1, $mdDialog, $timeout) {
      var vm = $scope;
      vm.dataPieChart = Parte1
        .getAllStudentsPieChart({ 'degreeId': [1] })
        .then(function(result) {
          vm.myChartObject = {};
          vm.myChartObject.type = 'PieChart';
          vm.myChartObject.data = result;
          vm.myChartObject.options = {
            'title': 'Gerar gráfico com a quantidade de students por degree'
          };
          vm.sumStudants = Parte1.sumStudentsByKey;
        });
      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }
  });