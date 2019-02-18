import { html, LitElement } from 'lit-element';
import css from './badge.css';

class BadgeComponent extends LitElement {

  constructor() {
    super();
    this.counter = 0;
    this.condition = false;
  }

  static get properties() {
    return {
      counter: {
        type: Number
      },
      condition: {
        type: String
      }
    };
  }

  render() {
    const conditionClass = this.condition ? 'met' : 'unmet';

    return html`
      <style>
        ${css}
      </style>

      <span class=${conditionClass}>${this.counter}</span>
    `;
  }
}

customElements.define('x-badge', BadgeComponent);