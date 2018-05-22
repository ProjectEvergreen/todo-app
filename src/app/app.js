import { html, render } from 'lit-html';
import '../components/header/header';
import '../components/footer/footer';
import '../pages/home/home';

import css from './app.css';

// TOOD component MUST be transpiled with native Class syntax intact? need to check browser support
// https://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
class App extends HTMLElement {
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

      <div id="container">

        <section>
          <pe-header></pe-header>
        </section>
        
        <section>
          <pe-home></pe-home>
        </section>

        <section>
          <pe-footer></pe-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('pe-app', App);