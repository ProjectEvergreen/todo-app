import { expect } from '@esm-bundle/chai';
import './header.jsx';

describe('Components/Header', () => {
  let header;

  beforeEach(async () => {
    header = document.createElement('wcc-header');

    document.body.appendChild(header);

    await header.updateComplete;
  });

  afterEach(() => {
    header.remove();
    header = null;
  });

  describe('Default Behavior', () => {
    
    it('should have a greeting', () => { 
      const greeting = header.querySelectorAll('header h2')[0];

      expect(greeting.innerHTML).to.equal('Todo App Example');
    });

  });

});