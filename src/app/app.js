angular.module('angular-material-boilerplate', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ui.router',
  'ngResource',
  'googlechart',
  'templates',
  'app.shared',
  'app.layout',
  'app.toolbar',
  'app.sidenav',
  'app.parte1',
  'app.parte2'
])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('purple', {
      'default': '200'
    });
})

.run(['$state', function($state) {
  $state.go('parte1');
}]);