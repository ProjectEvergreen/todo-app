import { expect } from '@esm-bundle/chai';
import './badge.jsx';

describe('Components/Badge', () => {

  describe('Default Behavior', () => {
    let badge;

    beforeEach(async () => {
      badge = document.createElement('wcc-badge');
  
      document.body.appendChild(badge);
  
      await badge.updateComplete;
    });

    it('should have only have one output element', () => {
      const output = badge.querySelectorAll('span');

      expect(output.length).to.equal(1);
    });

    it('should have a default count of 0', () => {
      const output = badge.querySelectorAll('span')[0];

      expect(output.textContent).to.equal('0');
    });

    it('should have a default class of unmet', () => {
      const output = badge.querySelectorAll('span')[0];

      expect(output.getAttribute('class')).to.equal('unmet');
    });

    afterEach(() => {
      badge.remove();
      badge = null;
    });  
  });

  describe('Custom Count and Predicate', () => {
    let badge;

    beforeEach(async () => {
      badge = document.createElement('wcc-badge');
      badge.setAttribute('count', 2);
      badge.setAttribute('predicate', 'true');
  
      document.body.appendChild(badge);
  
      await badge.updateComplete;
    });

    it('should have only have one output element', () => {
      const output = badge.querySelectorAll('span');

      expect(output.length).to.equal(1);
    });

    it('should have the set count of 2', () => {
      const output = badge.querySelectorAll('span')[0];

      expect(output.textContent).to.contain('2');
    });

    it('should have a class of met when predicate is set to true', () => {
      const output = badge.querySelectorAll('span')[0];

      expect(output.getAttribute('class')).to.equal('met');
    });

    it('should have the emoji in the output when the predicate is met', () => {
      const output = badge.querySelectorAll('span')[0];

      expect(output.textContent).to.contain('2 🥳');
    });
  });

});