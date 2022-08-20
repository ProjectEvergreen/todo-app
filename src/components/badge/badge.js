import { html, LitElement } from 'lit';
// import css from './badge.css';

class BadgeComponent extends LitElement {

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
    const css = '';
    const conditionClass = this.condition ? 'met' : 'unmet';

    return html`
      <style>
        ${css}
      </style>

      <span class=${ conditionClass }>${ this.counter }</span>
    `;
  }
}

customElements.define('x-badge', BadgeComponent);