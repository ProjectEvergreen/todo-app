import { html, LitElement } from 'lit';
import css from './header.css?type=css';

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