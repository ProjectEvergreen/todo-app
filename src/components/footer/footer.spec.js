import { expect } from '@esm-bundle/chai';
import './footer.jsx';

describe('Components/Footer', () => {
  let footer;

  beforeEach(async () => {
    footer = document.createElement('wcc-footer');

    document.body.appendChild(footer);

    await footer.updateComplete;
  });

  afterEach(() => {
    footer.remove();
    footer = null;
  });

  describe('Default Behavior', () => {
    let content;
    
    beforeEach(() => {
      content = footer.querySelectorAll('footer a')[0];
    });

    it('should have a link to the project that displays the project name', () => {
      expect(content.textContent).to.equal('Project Evergreen');
    });

    it('should have a link to the project with the project name', () => {
      expect(content.href).to.equal('https://projectevergreen.github.io/');
    });
  });

});