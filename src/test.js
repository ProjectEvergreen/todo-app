import { html, LitElement } from '@polymer/lit-element';

setTimeout(() => {
  console.log('() should be transpiled to function, right?'); // eslint-disable-line
});

class OwenComponent extends LitElement {
  _render() {
    return html`
      <footer>
        <a href="https://projectevergreen.github.io">Project Evergreen</a>
      </footer>
    `;
  }
}

customElements.define('x-owen', OwenComponent);