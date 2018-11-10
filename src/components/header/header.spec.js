import './header.js';

describe('Header Component', () => {
  let header;

  beforeEach(async () => {
    header = document.createElement('x-header');

    document.body.appendChild(header);

    // this is what makes the magic happen ✨
    await header.updateComplete;
  });

  afterEach(() => {
    header.remove();
    header = null;
  });

  describe('Default Behavior', () => {
    
    it('should have a greeting', () => { 
      const greeting = header.shadowRoot.querySelectorAll('header h2')[0];

      expect(greeting.innerHTML).toBe('Todo App Example');
    });

  });

});