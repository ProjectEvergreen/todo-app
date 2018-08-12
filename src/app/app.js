import { html, LitElement } from '@polymer/lit-element';
import '../components/header/header';
import '../components/footer/footer';
import '../pages/home/home';

import css from './app.css';

// TOOD component MUST be transpiled with native Class syntax intact? need to check browser support
// https://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
class App extends LitElement {

  _render() {
    return html`
      <style>
        ${css}
      </style>

      <div id="container">

        <section>
          <x-header></x-header>
        </section>
        
        <section>
          <x-home-page></x-home-page>
        </section>

        <section>
          <x-footer></x-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('x-app', App);