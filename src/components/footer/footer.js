import { html, LitElement } from 'lit';
// import css from './footer.css?type=css';

class FooterComponent extends LitElement {

  render() {
    const css = '';

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