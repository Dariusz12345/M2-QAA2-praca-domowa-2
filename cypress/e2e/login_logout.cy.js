describe('Login and Logout Tests', () => {
    it('Test 1: Login with user888@gmail.com and logout', () => {
      // Otwórz stronę logowania
      cy.visit('https://www.edu.goit.global/account/login');
  
      // Użyj polecenia logowania
      cy.login('user888@gmail.com', '1234567890');
  
      // Znajdź przycisk w prawym górnym rogu i otwórz menu
      cy.get('.user-menu-button').should('be.visible').click();
  
      // Znajdź przycisk Log out i kliknij
      cy.contains('Log out').click();
  
      // Upewnij się, że wróciło do strony logowania
      cy.url().should('include', '/account/login');
    });
  });

  
  it('Test 2: Login with testowyqa@qa.team and logout', () => {
    // Otwórz stronę logowania
    cy.visit('https://www.edu.goit.global/account/login');
  
    // Użyj polecenia logowania
    cy.login('testowyqa@qa.team', 'QA!automation-1');
  
    // Znajdź przycisk w prawym górnym rogu i otwórz menu
    cy.get('.user-menu-button').should('be.visible').click();
  
    // Znajdź przycisk Log out i kliknij
    cy.contains('Log out').click();
  
    // Upewnij się, że wróciło do strony logowania
    cy.url().should('include', '/account/login');
  });
  