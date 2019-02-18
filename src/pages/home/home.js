import { html, LitElement } from 'lit-element';
import '../../components/todo-list/todo-list';
import css from './home.css';

class HomePage extends LitElement {
  constructor() {
    super();

    this.todos = [];
  }

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