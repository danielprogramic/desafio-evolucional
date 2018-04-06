angular.module('app.parte2', [
  'ui.router',
  'parte2.controllers.Parte2Ctrl',
  'parte1.services.Parte1',
])

.config(function config($stateProvider) {
  $stateProvider.state('parte2', {
    url: '/parte2',
    templateUrl: 'parte2/parte2.view.html'
  });
});