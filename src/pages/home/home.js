import { html, LitElement } from 'lit';
import '../../components/todo-list/todo-list.js';
import css from './home.css?type=css';

class HomePage extends LitElement {

  render() {
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