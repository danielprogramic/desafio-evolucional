describe('Parte1Ctrl', function() {

  var controller;

  beforeEach(module('app.parte1'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function($controller) {
    controller = $controller('Parte1Ctrl', {});
  }));

  it('should set the correct about page message', function() {
    expect(controller.toDoItems.length).toBeGreaterThan(0);
  });

});