import './footer.js';

describe('Footer Component', () => {
  let header;

  beforeEach(async () => {
    header = document.createElement('x-footer');

    document.body.appendChild(header);

    // this is what makes the magic happen ✨
    await header.updateComplete;
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
