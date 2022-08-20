import { html, LitElement } from 'lit';
import '../../components/todo-list/todo-list.js';
// import css from './home.css';

class HomePage extends LitElement {

  render() {
    const css = '';

    return html`
      <style>
        ${css}
      </style>

      <div>

        <x-todo-list></x-todo-list>

      </div>
    `;
  }
}

customElements.define('x-home-page', HomePage);