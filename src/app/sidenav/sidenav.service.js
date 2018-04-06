angular.module('sidenav.services.SideNav', [])
  .factory('SideNav', function() {

    var menuItems = [{
        name: 'Parte 1',
        icon: '',
        route: 'parte1'
      },
      {
        name: 'Parte 2',
        icon: '',
        route: 'parte2'
      }
    ];

    var service = {
      getMenuItems: menuItems
    };
    return service;

  });