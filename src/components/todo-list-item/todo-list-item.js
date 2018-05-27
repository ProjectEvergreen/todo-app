import { html, render } from 'lit-html/lib/lit-extended';
import css from './todo-list-item.css';

class TodoListItem extends HTMLElement {
  constructor() {
    super();
    
    this._todo = {};
    this.root = this.attachShadow({ mode: 'closed' });

    render(this.template(), this.root);
  }

  static get observedAttributes() {
    return ['todo'];
  }

  attributeChangedCallback(name, oldVal, newVal = []) {
    switch (name) {

      case 'todo':
        this._todo = newVal ? JSON.parse(newVal) : {};
        break;
      default:

    }

    render(this.template(), this.root);
  }

  dispatchCompleteTodoEvent() {
    const event = new CustomEvent('completeTodo', { detail: this._todo.id });

    document.dispatchEvent(event);
  }

  dispatchDeleteTodoEvent() {
    const event = new CustomEvent('deleteTodo', { detail: this._todo.id });

    document.dispatchEvent(event);
  }

  template() {
    const isCompleted = this._todo.completed;
    const completionStatus = isCompleted ? '✅' : '⛔';

    // CSS Grid here?
    return html` 
      <style>
        ${css}
      </style>

      <span>
        ${this._todo.task}

        <input class="complete-todo" type="checkbox" checked=${isCompleted} onchange=${this.dispatchCompleteTodoEvent.bind(this)} />
        <span>${completionStatus}</span>
            
        <span class="delete-todo" onclick=${this.dispatchDeleteTodoEvent.bind(this)}>❌</span>
      </span>
    `;
  }
}

customElements.define('pe-todo-list-item', TodoListItem);