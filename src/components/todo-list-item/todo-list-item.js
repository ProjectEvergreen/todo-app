import { html, LitElement } from 'lit-element';
import css from './todo-list-item.css';

class TodoListItemComponent extends LitElement {

  constructor() {
    super();

    this.todo = {};
  }

  static get properties() {
    return {
      todo: Object
    };
  }

  dispatchCompleteTodoEvent(todoId) {
    const event = new CustomEvent('completeTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  dispatchDeleteTodoEvent(todoId) {
    const event = new CustomEvent('deleteTodo', { detail: todoId });

    document.dispatchEvent(event);
  }

  updated() {
    let el = this.shadowRoot.querySelector('.complete-todo');

    el.checked = this.todo.completed ? 'true' : '';
  }

  render() {
    const todo = this.todo;
    const isCompleted = todo.completed;
    const completionStatus = isCompleted ? '✅' : '⛔';

    return html`
      <style>
        ${css}
      </style>

      <span>
        ${this.todo.task}

        <input class="complete-todo" type="checkbox"  @change=${() => { this.dispatchCompleteTodoEvent(todo.id); }}/>
        <span>${completionStatus}</span>

        <span class="delete-todo" @click=${() => { this.dispatchDeleteTodoEvent(todo.id); }}>❌</span>
      </span>
    `;
  }
}

customElements.define('x-todo-list-item', TodoListItemComponent);