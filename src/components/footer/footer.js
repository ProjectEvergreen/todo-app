import { html, LitElement } from '@polymer/lit-element';
import css from './footer.css';

class FooterComponent extends LitElement {

  _render() {
    return html`
      <style>
        ${css}
      </style>
      
      <footer>
        <a href="https://projectevergreen.github.io">Project Evergreen</a>
      </footer>
    `;
  }
}

customElements.define('x-footer', FooterComponent);