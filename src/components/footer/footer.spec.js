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
    header.remove();
    header = null;
  });

  describe('Default Behavior', () => {
    it('should have a link to the project', () => {
      const greeting = header.shadowRoot.querySelectorAll('footer a')[0];

      expect(greeting.innerHTML).toBe('Project Evergreen');
    });
  });

});
