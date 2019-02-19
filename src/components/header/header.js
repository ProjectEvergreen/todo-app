import { html, LitElement } from 'lit-element';
import css from './header.css';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>

        <h2 class="header-text">Todo App Example</h2>

      </header>
    `;
  }
}

customElements.define('x-header', HeaderComponent);