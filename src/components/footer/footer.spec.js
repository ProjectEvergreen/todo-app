import './footer.js';

describe('Footer Component', () => {
  let footer;

  beforeEach(async () => {
    footer = document.createElement('x-footer');

    document.body.appendChild(footer);

    // this is what makes the magic happen ✨
    await footer.updateComplete;
  });

  afterEach(() => {
    footer.remove();
    footer = null;
  });

  describe('Default Behavior', () => {
    let greeting;
    
    beforeEach(() => {
      greeting = footer.shadowRoot.querySelectorAll('footer a')[0];
    });

    it('should have a link to the project that displays the project name', () => {
      expect(greeting.innerHTML).toBe('Project Evergreen');
    });

    it('should have a link to the project with the project name', () => {
      expect(greeting.href).toBe('https://projectevergreen.github.io/');
    });
  });

});
