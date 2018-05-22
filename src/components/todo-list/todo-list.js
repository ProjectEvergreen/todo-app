import { html, render } from 'lit-html';
import css from './todo-list.css';

class TodoList extends HTMLElement {
  
  constructor() {
    super();
    
    // TODO document true private properties
    this._todos = [];
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);
  }

  static get observedAttributes() {
    return ['todos'];
  }

  // TODO document default arguments??
  attributeChangedCallback(name, oldVal, newVal = []) {
    switch (name) {

      case 'todos':
        this._todos = newVal ? JSON.parse(newVal) : [];
        break;

      default:

    }

    render(this.template(), this.root);
  }

  renderTodoListItems() {
    return this._todos.map((todo) => {

      return html`
        <li>${todo.task}</li>
      `;
    });
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>        

        <ol>
          ${ this.renderTodoListItems() }
        </ol>
    
      </div>
    `;
  }
}

customElements.define('pe-todo-list', TodoList);