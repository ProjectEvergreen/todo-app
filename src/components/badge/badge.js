import { html, render } from 'lit-html/lib/lit-extended';
import css from './badge.css';

class Badge extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    this._counter = 0;
    this._condition = 'unmet';

    render(this.template(), this.root);
  }

  static get observedAttributes() {
    return ['counter', 'condition'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {

      case 'counter':
        this._counter = parseInt(newVal, 10) || 0;
        break;
      case 'condition':
        this._condition = newVal === 'true' ? 'met' : 'unmet';
        break;
      default:

    }

    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <span class$=${ this._condition }>${ this._counter }</span>
    `;
  }
}

customElements.define('pe-badge', Badge);