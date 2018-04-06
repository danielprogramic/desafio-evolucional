describe('Parte2Ctrl ', function() {

  var controller;

  beforeEach(module('app.parte2'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function($controller) {
    controller = $controller('Parte2Ctrl', {});
  }));

  it('should set the correct about page message', function() {
    expect(controller.message).toBe('And here is where I tell you all about myself.');
  });

});