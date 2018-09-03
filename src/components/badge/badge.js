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
    // TODO chrome errors out without these prop checks
    const conditionClass = props && props.condition ? 'met' : 'unmet';
    const counter = props && props.counter ? props.counter : 0;

    return html`
      <style>
        ${css}
      </style>

      <span class$=${ conditionClass }>${ counter }</span>
    `;
  }
}

customElements.define('x-badge', BadgeComponent);