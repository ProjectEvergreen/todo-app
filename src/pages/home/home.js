import { html, render } from 'lit-html';
import css from './home.css';

class Home extends HTMLElement {
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

      <div>
        <h3>Home Page 👍</h3>
      </div>
    `;
  }
}

customElements.define('pe-home', Home);