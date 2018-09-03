import { html, LitElement } from '@polymer/lit-element';
import '../components/header/header';
// import '../components/footer/footer';
// import '../pages/home/home';
import css from './app.css';

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
<!--         
        <section>
          <x-home-page></x-home-page>
        </section>

        <section>
          <x-footer></x-footer>
        </section> -->

      </div>
    `;
  }
}

customElements.define('x-app', App);