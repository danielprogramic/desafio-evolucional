angular.module('app.parte1', [
  'ui.router',
  'parte1.controllers.Parte1Ctrl',
  'parte1.services.Parte1',
  'shared.services.Utils'
])

.config(function config($stateProvider) {
  $stateProvider.state('parte1', {
    url: '/parte1',
    templateUrl: 'parte1/parte1.view.html'
  });
});