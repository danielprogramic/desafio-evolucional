describe('test todo page', function() {

  beforeEach(function() {
    browser.get('#/parte1');
  });

  it('should ensure the page title is correct', function() {
    expect(browser.getTitle()).toEqual('Desafio Evolucional');
  });
});