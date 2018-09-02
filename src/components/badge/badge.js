import { html, LitElement } from '@polymer/lit-element';
import css from './badge.css';

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

  _render(props) {
    const conditionClass = props.condition ? 'met' : 'unmet';

    return html`
      <style>
        ${css}
      </style>

      <span class$=${ conditionClass }>${ props.counter }</span>
    `;
  }
}

customElements.define('x-badge', BadgeComponent);