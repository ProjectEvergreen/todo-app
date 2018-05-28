import { html, render } from 'lit-html';
import css from './footer.css';

class Footer extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <footer>
        <a href="https://project-evergreen.thegreenhouse.io">Project Evergreen</a>
      </footer>
    `;
  }
}

customElements.define('pe-footer', Footer);