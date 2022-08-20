import { html, LitElement } from 'lit';
import '../components/header/header.js';
import '../components/footer/footer.js';
import '../pages/home/home.js';
import css from './app.css?type=css';

class App extends LitElement {

  render() {
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